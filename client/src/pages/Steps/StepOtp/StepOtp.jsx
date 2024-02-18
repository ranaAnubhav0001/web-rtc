import React, { useState } from 'react';
import Card from '../../../components/Card/Card';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/Button/Button';
import styles from './StepOtp.module.css';
import { verifyOtp } from '../../../apiCalls/otp';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/authSlice';


const StepOtp = () => {
    const dispatch = useDispatch();
    const [otp, setOtp] = useState('');
    const { phone, hash } = useSelector((state) => state.authSlice.otp)

    async function onSubmit() {
        try {
            const res = await verifyOtp({ otp, phone, hash })
            dispatch(setAuth(res))
            console.log(res, "response ");
        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <div className={styles.cardWrapper}>
                <Card
                    title="Enter the code we just texted you"
                    icon="lock-emoji"
                >
                    <TextInput
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <div className={styles.actionButtonWrap}>
                        <Button onClick={onSubmit} text="Next" />
                    </div>
                    <p className={styles.bottomParagraph}>
                        By entering your number, you’re agreeing to our Terms of
                        Service and Privacy Policy. Thanks!
                    </p>
                </Card>
            </div>
        </>
    );
};

export default StepOtp;