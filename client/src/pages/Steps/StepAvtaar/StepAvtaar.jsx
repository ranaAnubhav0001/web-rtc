import React from 'react';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import styles from './StepAvtaar.module.css';

const StepAvatar = ({ onNext }) => {
    return (
        <>
            <Card title={`Okay, ${name}`} icon="monkey-emoji">
                <p className={styles.subHeading}>How’s this photo?</p>
                <div className={styles.avatarWrapper}>
                    <img
                        className={styles.avatarImage}
                        // src={image}
                        alt="avatar"
                    />
                </div>
                <div>
                    <input
                        // onChange={captureImage}
                        id="avatarInput"
                        type="file"
                        className={styles.avatarInput}
                    />
                    <label className={styles.avatarLabel} htmlFor="avatarInput">
                        Choose a different photo
                    </label>
                </div>
                <div>
                    {/* <Button onClick={submit} text="Next" /> */}
                    <Button text="Next" />
                </div>
            </Card>
        </>
    );
};

export default StepAvatar;