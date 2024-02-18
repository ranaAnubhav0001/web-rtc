import React, { useState } from 'react';
import Card from '../../../../components/Card/Card';
import Button from '../../../../components/Button/Button';
import TextInput from '../../../../components/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
import { useDispatch } from 'react-redux';
import { sendOtp } from '../../../../apiCalls/otp';
import { setOtp } from '../../../../redux/authSlice';


const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    async function onSubmit() {
        const res = await sendOtp({ phone: phoneNumber });
        console.log(res, "data isme hai");
        dispatch(setOtp({ phone: res.phone, hash: res.hash }));
        onNext();
    }

    return (
        <Card title="Enter you phone number" icon="phone">
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={onSubmit} />
                    {/* <Button text="Next" onClick={onNext} /> */}
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    );
};

export default Phone;