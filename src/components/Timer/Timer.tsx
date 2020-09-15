import React, { useState } from 'react';
import { useCountdownTimer } from 'use-countdown-timer';
// Styles
import styles from './Timer.module.css';

interface Props {
    secondsLeft: number;
}

export const Timer: React.FC<Props> = ({ secondsLeft }) => {
    const [ hasZeroed, setHasZeroed ] = useState<boolean>(false);
    let { countdown } = useCountdownTimer({
        timer: secondsLeft*1000,
        autostart: true,
        onExpire: () => setHasZeroed(true),
    });
    
    countdown = Math.round(countdown / 1000);
    const days = Math.max(Math.floor( countdown / 86400 ), 0);
    const hours = Math.max(Math.floor( (countdown - days*86400) / 3600 ), 0);
    const minutes = Math.max(Math.floor( (countdown - days*86400 - hours*3600) / 60 ), 0);
    const seconds = countdown - days*86400 - hours*3600 - minutes*60;
    const timeObj: {[key: string]: number} = { days, hours, minutes, seconds };

    return (
        <div className={styles.container}>
            {Object.keys(timeObj).map(key => (
                <div key={key} className={styles.timeItem}>
                    <p className={styles.timeValue} data-testid={key}>
                        {hasZeroed
                            ? '00'
                            : (timeObj[key] < 10) ? `0${timeObj[key]}` : timeObj[key]
                        }
                    </p>
                    <p className={styles.timeUnit}>{key}</p>
                </div>
            ))}
        </div>
    )
}
