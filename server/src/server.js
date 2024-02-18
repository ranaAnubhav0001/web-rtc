import dotenv from 'dotenv';
import app from "./app.js";
import OtpRouter from './routes/OtpRoute.js'
//DB CONFIG
import DbConfig from './db/dbConfig.js';

//DOT ENV CONFIG
dotenv.config()

//PORT CONNECTION
const PORT = process.env.PORT || 9090;

//API CONNECTION
app.use('/api/otp', OtpRouter)

//TO LISTEN SERVER CONNECTIONS
const startServer = async () => {
    try {
        await DbConfig();
        app.on("error", (err) => {
            console.log("Error: --> ", err);
        });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.log("Mongo DB Connection Error-->", err);
    }
};

startServer();
