import React from 'react';
import styles from '../../styles/Contacts.module.css'
import Layout, {LayoutVariant} from '../layouts/Layout'
import contact_image from '../../assets/contacts.svg'

const Contacts = () => {
    return (
        <>
            <Layout height='100vh' variant={LayoutVariant.white} backgroundAttachment={'fixed'} backgroundSize={'cover'}>
                <div className={styles.contacts}>
                    <div className={styles.contacts_wrapper}>
                        <p className={styles.contact_label}>КОНТАКТЫ</p>
                        <button className={styles.contact_button}>
                            telegram.link
                        </button>
                        <button className={styles.contact_button}>
                            vk.link
                        </button>
                    </div>
                    <img src={contact_image} alt='image-geo' className={styles.contact_image} width={500} height={500} style={{marginTop: '50px'}}/>
                </div>
            </Layout>
        </>
    );
};

export default Contacts;