import {ICard} from "../../types/types";
import './CardList.css'
import { FC, useState, useEffect } from 'react';

interface CardListProps {
    cards: ICard[];
}

const CardList: FC<CardListProps> = ({ cards}) => {
    return (
        <>
            {cards.map((card: ICard) => (
                <div key={card.id} className="card_container">
                    <p className="card_label">{card.name}</p>
                    <div className="card_content">
                        <img src={card.img} alt="product-image" className="card_image"/>
                        <div className="card_button_wrapper">
                            <button className="card_button">Описание</button>
                            <button className="card_button">Купить</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardList;
