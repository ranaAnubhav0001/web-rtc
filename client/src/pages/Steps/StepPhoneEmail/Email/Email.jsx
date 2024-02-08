import React, { useState } from 'react';
import Card from '../../../../components/Card/Card';
import Button from '../../../../components/Button/Button';
import TextInput from '../../../../components/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setStep } from '../../../../redux/onNextSlice';


const Email = ({ onNext }) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch()

    let onClick = () => {
        dispatch(setStep())
    }

    return (
        <Card title="Enter your email id" icon="email-emoji">
            <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    {/* <Button text="Next" onClick={onClick} /> */}
                    <Button text="Next" onClick={onNext} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    );
};

export default Email;