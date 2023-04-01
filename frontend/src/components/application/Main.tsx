import React from 'react';
import styles from '../../styles/Main.module.css'
import hand from '../../assets/hand.svg'
import Layout, {LayoutVariant} from '../layouts/Layout'

const Main = () => {
    return (
        <>
            <Layout height={'100vh'} variant={LayoutVariant.image}
                    backgroundSize={'cover'}
                    backgroundAttachment={'fixed'}
                    backgroundPosition={'center center'}
                    backgroundRepeat={'no-repeat'}>
                <img src={hand} alt='hand_key' className={styles.main_image}/>
            </Layout>
        </>
    );
};

export default Main;
