import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
    const [isChecked, setCheckBox] = useState(false)
    return (
        <div className={styles.navBar} data-testid="header">
            <h1 className={styles.logo}>
                <Link to="./">
                    SpaceX Info <span role="img" aria-label="Rocket Icon">🚀</span>
                </Link>
            </h1>
            <label htmlFor="checkbox" className={styles.menuBtn}>
                {isChecked ? <MdClose /> : <ImMenu />}
            </label>
            <input 
                type="checkbox" 
                id="checkbox" 
                className={styles.checkbox} onChange={() => setCheckBox(prev => !prev)} 
            />
            <div className={styles.links}>
                <NavLink to="./">
                    <button data-testid="home-link" className={styles.link}>
                        <FaHome /> Home
                    </button>
                </NavLink>
                <NavLink to="./launches-all" activeClassName={styles.activeLink}>
                    <button data-testid="launches-link" className={styles.link}>
                        <GoRocket /> Launches
                    </button>
                </NavLink>
                <NavLink to="./rockets" activeClassName={styles.activeLink}>
                    <button data-testid="rockets-link" className={styles.link}>
                        <AiFillRocket /> Rockets
                    </button>
                </NavLink>
                <NavLink to="./history" activeClassName={styles.activeLink}>
                    <button data-testid="history-link" className={styles.link}>
                        <FaHistory /> History
                    </button>
                </NavLink>
                <NavLink to="./about" activeClassName={styles.activeLink}>
                    <button data-testid="about-link" className={styles.link}>
                        <BsInfoCircleFill /> About
                    </button>
                </NavLink>
            </div>
        </div>
    );
}
