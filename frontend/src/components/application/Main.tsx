import React from 'react';
import styles from '../../styles/Main.module.css'
import hand from '../../assets/hand.svg'
import Layout, {LayoutVariant} from '../layouts/Layout'
import CardList from "../interfaces/CardList";

const Main = () => {
    return (
        <>
            <Layout height={'100vh'} variant={LayoutVariant.image}
                    backgroundSize={'contain'}
                    backgroundAttachment={'fixed'}
                    backgroundPosition={'center center'}
                    backgroundRepeat={'no-repeat'}>
                <img src={hand} alt='hand_key' className={styles.main_image}/>
                <div className={styles.card_wrapper}>
                    <CardList/>
                    <CardList/>
                </div>
            </Layout>
        </>
    );
};

export default Main;
