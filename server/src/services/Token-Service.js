import jwt from 'jsonwebtoken';
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;

const TokenService = {

    //GENERATE-ACCESS-TOKEN
    generateTokens(payload) {
        
        const accessToken = jwt.sign(payload,accessTokenSecret,{
            expiresIn:'1h'
        });

        const refreshToken = jwt.sign(payload,refreshTokenSecret,{
            expiresIn:'1y'
        })
        return {accessToken, refreshToken};
    },

   


}

export default TokenService;
