import { apiRequest } from "./index.js";

//SEND-OTP
export const sendOtp = async (data) => apiRequest("post", 'otp/send-otp', data);


//VERIFY-OTP
export const verifyOtp = async (data) => apiRequest("post", 'otp/verify-otp', data);
