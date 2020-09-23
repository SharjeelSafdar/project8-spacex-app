import React, { useState } from 'react';
// Icons
import { FaHome, FaHistory } from 'react-icons/fa';
import { GoRocket } from 'react-icons/go';
import { AiFillRocket } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import { ImMenu } from 'react-icons/im';
import { MdClose } from 'react-icons/md';
// Styles
import styles from './Header.module.css';

export const Header: React.FC<{}> = () => {
    const [ isChecked, setCheckBox ] = useState(false)
    return (
        <div className={styles.navBar}>
            <h1 className={styles.logo}>
                SpaceX Info <span role="img" aria-label="Rocket Icon">🚀</span>
            </h1>
            <label htmlFor="checkbox" className={styles.menuBtn}>
                {isChecked ? <MdClose /> : <ImMenu />}
            </label>
            <input type="checkbox" id="checkbox" className={styles.checkbox} onChange={() => setCheckBox(prev => !prev)} />
            <div className={styles.links}>
                <button data-testid="home-link" className={styles.link}>
                    <FaHome /> Home
                </button>
                <button data-testid="launches-link" className={styles.link}>
                    <GoRocket /> Launches
                </button>
                <button data-testid="rockets-link" className={styles.link}>
                    <AiFillRocket /> Rockets
                </button>
                <button data-testid="history-link" className={styles.link}>
                    <FaHistory /> History
                </button>
                <button data-testid="about-link" className={styles.link}>
                    <BsInfoCircleFill /> About
                </button>
            </div>
        </div>
    );
}
