import React from 'react';
import styles from '../../styles/CardList.module.css'
import card_image from '../../assets/image-geo.svg'


const CardList = () => {

    return (
        <div className={styles.card}>
            {/*{cards.map(card =>
                <div key={card.id}>
                    {card.name}
                    {card.image}
                    {card.description}
                </div>
            )}*/}
            <img className={styles.card_image} src={card_image} alt='geo-image'/>
            <p className={styles.label}>Смена ГЕО-локации</p>
            <button className={styles.card_button}>Купить</button>
        </div>
    );
};

export default CardList;