import OtpService from "../services/Otp-Service.js";
import HashService from "../services/Hash-Service.js";
import UserService from "../services/User-Service.js";
import TokenService from "../services/Token-Service.js";
// import UserDto from '../dtos/user-dtos.js'  isme custom data bhej skte hai modify krke --for more check dtos folder


const AuthController = {

    //SEND-OTP
    async sendOtp(req, res) {
        const { phone } = req.body;
        if (!phone) {
            res.status(400).json({ message: 'Phone Field is required!' })
        }


        //GENERATE OTP
        const otp = await OtpService.generateOtp()

        //HASH OTP
        const timeValidation = 1000 * 60 * 2 //2 min
        const expires = Date.now() + timeValidation;
        const data = `${phone}.${otp}.${expires}`;
        const hash = HashService.HashOtp(data)

        //SEND OTP TO MOBILE NUMBER
        try {
            // await OtpService.sendBySms(phone, otp);
            return res.json({
                hash: `${hash}.${expires}`,
                phone,
                otp
            })
        } catch (error) {
            console.log(error, "Error while sending Otp to phone number");
            res.status(500).json({ message: "Message Sending Failed!!" })
        }


        res.json({
            otp: hash
        })

    },



    //VERIFY-OTP
    async verifyOtp(req, res) {
        const { otp, hash, phone } = req.body;
        if (!otp || !hash || !phone) {
            res.status(400).json({
                message: "All fields are required"
            })
        }

        const [HashedOtp, expires] = hash.split('.')
        if (Date.now() > +expires) {
            res.status(400).json({
                message: "OTP Expired!!"
            })
        }

        const data = `${phone}.${otp}.${expires}`;
        const isValid = OtpService.verifyOtp(HashedOtp, data);
        if (!isValid) {
            res.status(400).json({ message: "Invalid OTP" })
        }

        let user;
        // let accessToken;
        try {
            user = await UserService.findUser({ phone })
            if (!user) {
                user = await UserService.createUser({ phone })
            }
        } catch (error) {
            console.log(err, ":- Error");
            res.status(500).json({ message: "DB Error!!!" });
        }

        //GENERATE JWT TOKEN
        const { accessToken, refreshToken } = TokenService.generateTokens({ _id: user._id, activated: false });
        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });

        // const userDto = new UserDto(user);
        res.json({ accessToken , user})




    }
};

export default AuthController;
