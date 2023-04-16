import React from 'react';
import Layout, {LayoutVariant} from "../layouts/Layout";
import styles from '../../styles/Reviews.module.css'
import external_link from "../../assets/external-link .svg";
import reviews_image from '../../assets/papers.svg'

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
                        </button>
                    </div>
                    <img src={reviews_image} alt='reviews-image' className={styles.reviews_image}/>
                </div>
            </Layout>
        </>
    );
};

export default Reviews;