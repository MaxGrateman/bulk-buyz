import React from 'react';
import Layout, {LayoutVariant} from "../layouts/Layout";
import styles from '../../styles/Reviews.module.css'
import external_link from "../../assets/external-link .svg";
import reviews_image from '../../assets/reviews.png'

const Reviews = () => {
    return (
        <>
            <Layout height={'100vh'} variant={LayoutVariant.white}  backgroundAttachment={'fixed'} backgroundSize={'cover'}>
                <div className={styles.reviews}>
                    <div className={styles.reviews_wrapper}>
                        <p className={styles.reviews_label}>ОТЗЫВЫ</p>
                        <p className={styles.reviews_text}>
                            Более чем 100 положительных отзывов и довольных покупателей.
                            Вы можете посмотреть реальные отзывы на сайте по ссылке ниже
                        </p>
                        <button className={styles.reviews_button}>
                            reviews.link
                            <img src={external_link} alt='icon-link' width={25} height={25} style={{left: '90px', top: '5px',position: 'relative'}}/>
                        </button>
                    </div>

                    <img src={reviews_image} alt='reviews-image' width={500} height={500} style={{marginTop: '100px'}}/>

                </div>
            </Layout>
        </>
    );
};

export default Reviews;