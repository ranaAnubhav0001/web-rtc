import express from 'express';
import AuthController from '../controllers/AuthController.js'
const OtpRouter = express.Router();

//[1.] SEND OTP
OtpRouter.post('/send-otp', AuthController.sendOtp)

//[2.] VERIFY OTP
OtpRouter.post('/verify-otp', AuthController.verifyOtp)


export default OtpRouter;
