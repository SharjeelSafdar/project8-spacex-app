import React from 'react';
import styles from './About.module.css';
import logo from '../../spacexLogo.jpg';
import elon from '../../elon.jpg';
import shotwell from '../../shotwell.jpg';
import tom from '../../tom.jpg';

const persons = [
    { name: 'Elon Musk', title: 'Founder, CEO, CTO', image: elon },
    { name: 'Gwynne Shotwell', title: 'COO', image: shotwell },
    { name: 'Tom Mueller', title: 'CTO-Propulsion', image: tom },
];

export const About = () => {
    return (
        <div className={styles.container}>
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
