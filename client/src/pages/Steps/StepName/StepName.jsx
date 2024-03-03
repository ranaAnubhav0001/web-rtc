import React, { useState } from 'react';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import TextInput from '../../../components/TextInput/TextInput';
import styles from './StepName.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../../redux/activateSlice';

const StepName = ({ onNext }) => {
    const dispatch = useDispatch()
    const { name } = useSelector((state) => state.activateSlice)
    const [fullName, setFullName] = useState(name);

    function nextStep() {
        if (!fullName) {
            return;
        }

        dispatch(setName(setFullName));
        onNext();

    }
    return (
        <>
            <Card title="What’s your full name?" icon="goggle-emoji">
                <TextInput
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <p className={styles.paragraph}>
                    People use real names at codershouse :) !
                </p>
                <div>
                    <Button onClick={nextStep} text="Next" />
                </div>
            </Card>
        </>
    );
};

export default StepName;