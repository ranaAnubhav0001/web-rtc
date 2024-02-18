import crypto from 'crypto';
import dotenv from 'dotenv';
import twilio from 'twilio';
import HashService from './Hash-Service.js';

//DOT ENV CONFIG
dotenv.config()

const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const client = twilio(smsSid, smsAuthToken, {
    lazyLoading:true
})

const OtpService = {
    //GENERATE OTP
    async generateOtp() {
        const otp =  crypto.randomInt(1000, 9999);
        return otp;
    },

    //SEND OTP VIA SMS
    async sendBySms(phone, otp){
       return  await client.messages.create({
        to: phone,
        from: process.env.SMS_FROM_NUMBER,
        body: `Your Coders House OTP is ${otp}`,
       }) 
    },

    //VERIFY OTP
    async verifyOtp(HashedOtp, data){
        const computedHash = HashService.HashOtp(data)
        return computedHash === HashedOtp;
    }
};

export default OtpService;
