import "./Cards.css"
import ICard from "../../interfaces/ICard/ICard";
import Modal from "../modal/Modal";
import EmailModal from "../../utils/EmailModal/EmailModal";
import React, {useState} from "react";
import CounterModal from "../../utils/CounterModal/CounterModal";

import steam_icon from '../../../assets/steam.svg'
import steam_pack from '../../../assets/steam_pack.svg'
import cross_icon from "../../../assets/modal-cross.svg";
import cart_icon from "../../../assets/cart.svg";


function Cards() {

    {/* useStates которые отвечают для скрытие и раскрытие модальных окон */}
    const [descrModal, setDescrModal] = useState(false);
    const [buyModal, setBuyModal] = useState(false);

    return(
        <div className="cards" id="cards">
            <label className="cards_label">Смена региона Steam</label>
            <div className="cards_sublabel">Оформи покупку в несколько кликов</div>
            <div className="cards_wrapper">

                {/* Карточки товаров */}
                <ICard width='560px' height='290px' background='linear-gradient(90deg, rgba(129, 106, 255, 0.6) 0.02%, rgba(170, 0, 255, 0.6) 100%)' padding='' borderRadius='25px' boxSizing='borderBox'>
                    <label className="card_label">Смена региона в Steam</label>
                    <div className="card_wrapper">
                        <img src={steam_icon} alt='steam-img' className="card_icon_steam"/>
                        <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-around'}}>
                            <button className="card_button" onClick={() => setDescrModal(true)}>Описание</button>
                            <button className="card_button" onClick={() => setBuyModal(true)}>Купить</button>
                        </div>
                    </div>
                </ICard>
                <ICard width='560px' height='290px' background='linear-gradient(90deg, rgba(129, 106, 255, 0.6) 0.02%, rgba(170, 0, 255, 0.6) 100%)' padding='' borderRadius='25px' boxSizing='borderBox'>
                    <label className="card_label">Набор для смены региона Steam</label>
                    <div className="card_wrapper">
                        <img src={steam_pack} alt='steam_pack-img' className="card_icon_geo" width={181} height={169}/>
                        <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-around'}}>
                            <button className="card_button">Описание</button>
                            <button className="card_button">Купить</button>
                        </div>
                    </div>
                </ICard>
            </div>


            {/* Модальное окно ОПИСАНИЕ */}
            <Modal width="784px" height="312px" open={descrModal} onClose={() => setDescrModal(false)} padding="33px 72px 8px" >
                <div className="modal_header_large" style={{justifyContent: 'center'}}>
                    <label className="modal_header_label_large" >Описание</label>
                    <button className='modal_large_close' onClick={() => setDescrModal(false)}><img width={35} height={35} src={cross_icon} alt='black-cross-icon'/></button>
                </div>
                <p className="modal_text_large" style={{textAlign: 'left'}}>
                    Смена региона Steam - это одноразовая услуга.
                    Полностью легально меняет регион вашего аккаунта.
                    У вас появится возможность покупать игры,
                    которые вы, по каким-либо причинам не можете
                    приобрести в своей стране.
                </p>
            </Modal>

            {/* Модальные окна КУПИТЬ*/}
            <Modal width="560px" height="325px" open={buyModal} onClose={() => setBuyModal(false)}>
                <div className="modal_buy_header">
                    <img src={cart_icon} alt='cart-icon' width={21} height={21} className='modal_buy_icon'/>
                    <label className="modal_header_label">Покупка</label>
                    <button onClick={() => setBuyModal(false)}><img className="modal_buy_close" src={cross_icon} alt='black-cross-icon' /></button>
                </div>
                <div className="modal_buy_main">
                    <div style={{display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center'}}>
                        <img src={steam_icon} alt="small-icon-steam" width={40} height={40}/>
                        <p className="modal_buy_name">Смена региона в Steam</p>
                    </div>
                    <select className="modal_buy_select" >
                        <option hidden={true}>Выбор региона</option>
                        <option className="modal_buy_option">Казахстан</option>
                        <option className="modal_buy_option">Аргентина</option>
                        <option className="modal_buy_option">Турция</option>
                    </select>
                    <EmailModal/>
                    <p className="modal_buy_total">150 Р</p>
                    <CounterModal/>
                    <p className="modal_buy_agree">
                        <input className="modal_buy_checkbox" type="checkbox" id="myCheckbox"/>
                        <label htmlFor="myCheckbox">Я прочитал <button>описание</button></label>
                    </p>
                </div>
                <div className="modal_buy_buttons">
                    <button className="modal_buy_button-close" onClick={() => setBuyModal(false)}>Закрыть</button>
                    <button className="modal_buy_button-next">Перейти к оплате</button>
                </div>
            </Modal>
        </div>
    )
}

export default Cards