import React from 'react';
import styles from '../styles/Main.module.css'
import hand from '../assets/hand.svg'

const Main = () => {
    return (
        <div className={styles.main}>
            <img src={hand} alt='hand_key' className={styles.main_image}/>
        </div>
    );
};

export default Main;
