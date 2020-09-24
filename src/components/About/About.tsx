import React from 'react';
// Images
import logo from '../../images/spacexLogo.jpg';
import elon from '../../images/elon.jpg';
import shotwell from '../../images/shotwell.jpg';
import tom from '../../images/tom.jpg';
// Styles
import styles from './About.module.css';

const persons = [
    { name: 'Elon Musk', title: 'Founder, CEO, CTO', image: elon },
    { name: 'Gwynne Shotwell', title: 'COO', image: shotwell },
    { name: 'Tom Mueller', title: 'CTO-Propulsion', image: tom },
];

export const About: React.FC<{}> = () => {
    return (
        <div className={styles.container} data-testid="about-page">
            <img src={logo} alt="logo" className={styles.logo} />
            <h4 className={styles.year}>Founded in 2002</h4>
            <p className={styles.details}>
                SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was 
                founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people 
                to live on other planets.
            </p>
            <div className={styles.persons}>
                {persons.map( person => (
                    <div className={styles.person} key={person.name}>
                        <img src={person.image} alt={person.name} />
                        <div className={styles.image}></div>
                        <h4>{person.name}</h4>
                        <p>{person.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
