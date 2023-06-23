import "./Cards.css"
import ICard from "../../interfaces/ICard/ICard";
import React, {useState} from "react";
import steam_icon from '../../../assets/steam.svg'
import geo_icon from '../../../assets/geo-point.svg'
import Modal from "../modal/Modal";
import cross_icon from "../../../assets/modal-cross.svg";
import cart_icon from "../../../assets/cart.svg";

function Cards() {

    const [descrModal, setDescrModal] = useState(false);
    const [buyModal, setBuyModal] = useState(false);

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
                            <button className="card_button" onClick={() => setDescrModal(true)}>Описание</button>
                            <button className="card_button" onClick={() => setBuyModal(true)}>Купить</button>
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
            <Modal width="784px" height="312px" open={descrModal} onClose={() => setDescrModal(false)} padding="33px 0 0 0" >
                <div className="modal_header_large" style={{justifyContent: 'center'}}>
                    <label className="modal_header_label_large" >Описание</label>
                    <button className='modal_large_close' onClick={() => setDescrModal(false)}><img width={35} height={35} src={cross_icon} alt='black-cross-icon'/></button>
                </div>
            </Modal>
            <Modal width="560px" height="325px" open={buyModal} onClose={() => setBuyModal(false)}>
                <div className="modal_buy_header">
                    <img src={cart_icon} alt='cart-icon' width={21} height={21} className='modal_buy_icon'/>
                    <label className="modal_header_label">Покупка</label>
                    <button onClick={() => setBuyModal(false)}><img className="modal_buy_close" src={cross_icon} alt='black-cross-icon' /></button>
                </div>
                <div className="modal_buy_main">

                </div>
                <div className="modal_buy_buttons">
                    <button className="modal_buy_button-close">Закрыть</button>
                    <button className="modal_buy_button-next">Перейти к оплате</button>
                </div>
            </Modal>
        </div>
    )
}

export default Cards