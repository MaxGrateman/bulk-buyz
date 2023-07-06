import React, {FC, ReactElement, ReactNode} from 'react';
import {ICard} from "../../types/types";
import './CardList.css'

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
                            <button className="card_button" onClick={() => setDescrModal(true)}>Описание</button>
                            <button className="card_button" onClick={() => setBuyModal(true)}>Купить</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardList;