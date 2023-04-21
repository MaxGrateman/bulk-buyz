import React from 'react';
import Layout, {LayoutVariant} from '../layouts/Layout'
import styles from '../../styles/About.module.css'
import about_image from '../../assets/globus.svg'

const About = () => {
    return (
        <>
            <Layout height={'100vh'} variant={LayoutVariant.white} backgroundAttachment={'fixed'} backgroundSize={'cover'}>
                <div className={styles.about}>
                    <div className={styles.about_wrapper}>
                        <p className={styles.about_label}>О НАС</p>
                        <p className={styles.about_text}>Bulkbuyz - это сайт, который предоставляет услуги
                            по смене региона в Steam. Смена региона в Steam позволяет пользователям обойти
                            ограничения и купить заблокированные игры, особенно актуально для пользователей из России. </p>
                    </div>
                    <img src={about_image} alt='about-image' className={styles.about_image}/>
                </div>
            </Layout>
        </>
    );
};

export default About;