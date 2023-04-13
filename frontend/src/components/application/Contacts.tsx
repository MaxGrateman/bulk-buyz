import React from 'react';
import styles from '../../styles/Contacts.module.css'
import Layout, {LayoutVariant} from '../layouts/Layout'
import external_link from '../../assets/external-link .svg'
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
                            <img src={external_link} alt='icon-link' width={25} height={25} style={{left: '80px', position: 'relative'}}/>
                        </button>
                        <button className={styles.contact_button}>
                            vk.link
                            <img src={external_link} alt='icon-link' width={25} height={25} style={{left: '117px', position: 'relative'}}/>
                        </button>
                    </div>
                    <img src={contact_image} alt='image-geo' width={500} height={500} style={{marginTop: '50px'}}/>
                </div>
            </Layout>
        </>
    );
};

export default Contacts;