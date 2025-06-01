import {ICard} from "../../types/types";
import './CardList.css'
import React, {FC} from 'react';
import 'react-loading-skeleton/dist/skeleton.css'

interface CardListProps {
    cards: ICard[];
    handleBuyClick: (card: ICard) => void;
    handleDescrClick: (card: ICard) => void;
}

const CardList: FC<CardListProps> = ({ cards, handleBuyClick, handleDescrClick} : any) => {

    return (
        <>
            {cards.map((card: ICard) => (
                <div key={card.id} className="card_container" >
                    <p className="card_label">{card.name}</p>
                    <div className="card_content">
                        <img src={`http://${import.meta.env.VITE_API_URL}${card.img}${card.img}`} alt="product-image" className="card_image" draggable="false"/>
                        <div className="card_button_wrapper">
                            <button className="card_button" onClick={() => handleDescrClick(card)}>Описание</button>
                            <button className="card_button" onClick={() => handleBuyClick(card)}>Купить</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardList;
