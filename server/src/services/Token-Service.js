import jwt from 'jsonwebtoken';
import { Refresh } from '../models/refresh-model.js'
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;

const TokenService = {

    //GENERATE-ACCESS-TOKEN
    generateTokens(payload) {

        const accessToken = jwt.sign(payload, accessTokenSecret, {
            expiresIn: '1h'
        });

        const refreshToken = jwt.sign(payload, refreshTokenSecret, {
            expiresIn: '1y'
        })
        return { accessToken, refreshToken };
    },


    //STORE REFRESH TOKEN IN DB
    async storeRefreshToken() {
        try {
            await Refresh.create({
                token,
                userId
            })
        } catch (error) {
            console.log(error.message);
        }
    }



}

export default TokenService;
