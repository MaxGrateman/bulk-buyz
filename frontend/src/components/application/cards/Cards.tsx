import "./Cards.css"
import ICard from "../../interfaces/ICard/ICard";
import React from "react";
import steam_icon from '../../../assets/steam.svg'
import geo_icon from '../../../assets/geo-point.svg'

function Cards() {


    return(
        <div className="cards" id="cards">
            <label className="cards_label">Смена региона Steam</label>
            <div className="cards_sublabel">Оформи покупку в несколько кликов</div>
            <div className="cards_wrapper">
                <ICard width='560px' height='290px' background='linear-gradient(90deg, rgba(129, 106, 255, 0.6) 0.02%, rgba(170, 0, 255, 0.6) 100%)' padding='' borderRadius='25px' boxSizing='borderBox'>
                    <label className="card_label">Смена региона в Steam на Казахстан</label>
                    <div className="card_wrapper">
                        <img src={steam_icon} alt='steam-img' className="card_icon_steam"/>
                        <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-around'}}>
                            <button className="card_button">Описание</button>
                            <button className="card_button">Купить</button>
                        </div>
                    </div>
                </ICard>
                <ICard width='560px' height='290px' background='linear-gradient(90deg, rgba(129, 106, 255, 0.6) 0.02%, rgba(170, 0, 255, 0.6) 100%)' padding='' borderRadius='25px' boxSizing='borderBox'>
                    <label className="card_label">Смена региона в Steam на Казахстан</label>
                    <div className="card_wrapper">
                        <img src={geo_icon} alt='steam-img' className="card_icon_geo"/>
                        <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-around'}}>
                            <button className="card_button">Описание</button>
                            <button className="card_button">Купить</button>
                        </div>
                    </div>
                </ICard>
            </div>
        </div>
    )
}

export default Cards