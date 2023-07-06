import "./Cards.css"
import "./../modal/ModalBuy.css"

import CardList from "../../interfaces/CardList/CardList";
import Modal from "../modal/Modal";
import EmailModal from "../../utils/EmailModal/EmailModal";
import React, {useEffect, useRef, useState} from "react";
import CounterModal from "../../utils/CounterModal/CounterModal";
import {SelectModal, SelectModalOption} from "../../utils/SelectModal/SelectModal";
import IWarning from "../../interfaces/IWarning/IWarning";

import steam_icon from '../../../assets/steam.svg'
import steam_pack from '../../../assets/steam_pack.svg'
import cross_icon from "../../../assets/modal-cross.svg";
import cart_icon from "../../../assets/cart.svg";
import {ICard} from "../../types/types";
import axios from "axios";


function Cards() {
    const [cards, setCards] = useState<ICard[]>([])

    interface CardsData {
        card: ICard[];
    }

    useEffect(() => {
        fetchCards();
    }, [])

    async function fetchCards() {
        try {
            const response = await axios.get<ICard[]>(
                `http://localhost:8080/backend/products.php`,
                {
                    responseType: 'json',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const cardsData = response.data;
            setCards(cardsData || []);
        } catch (e) {
            alert(e);
        }
    }

    /*Варианты выбор селектора*/
    const options: SelectModalOption[] = [
        { value: 'option1', label: 'Казахстан', price: 100 },
        { value: 'option2', label: 'Турция', price: 200 },
        { value: 'option3', label: 'Аргентина', price: 300 },
    ];

    {/* useStates которые отвечают для скрытие и раскрытие модальных окон */}
    const [descrModal, setDescrModal] = useState(false);
    const [descrModalSecond, setDescrModalSecond] = useState(false);
    const [buyModal, setBuyModal] = useState(false);

    /* useStates которые отвечают за value и price выбраного селектора */
    const [value, setValue] = useState<SelectModalOption | undefined>();
    const [price, setPrice] = useState<number>(0);

    const [isChecked, setIsChecked] = useState(false);
    const [showWarningRegion, setShowWarningRegion] = useState(false);
    const timerRef = useRef<number | null>(null);


    /* функция которая отрабатывает выборанный селектор и кидает его цену */
    function handleChange(option: SelectModalOption | undefined) {
        setValue(option);
        if (option) {
            setPrice(option.price);
        } else {
            setPrice(0);
        }
        console.log(option);
    }

    function handleCountChange(updatedPrice: number) {
        setPrice(updatedPrice);
    }

    const handleCheckboxChange = (event : any) => {
        setIsChecked(event.target.checked);
    };

    const handleButtonClick = () => {
        const checkboxLabel = document.querySelector('label[for="agree"]') as HTMLDivElement;
        const inputFocus = document.querySelector('.form_modal_input') as HTMLInputElement;
        if (!inputFocus.value && document.activeElement !== inputFocus) {
            inputFocus.focus();
        }
        if (!value) {
            setShowWarningRegion(true);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = window.setTimeout(() => {
                setShowWarningRegion(false);
            }, 3000);
        }
        if (!isChecked) {
            checkboxLabel.style.color = 'red';
        } else {
            checkboxLabel.style.color = 'black';
        }
    };

    useEffect(() => {
        if (value) {
            setShowWarningRegion(false);
        }
    }, [value]);


    return(
        <div className="cards" id="cards">
            <label className="cards_label">Смена региона Steam</label>
            <div className="cards_sublabel">Оформи покупку в несколько кликов</div>
            <div className="cards_wrapper">

                {/* Валидационые ворнинги для модального окна покупок */}
                    <IWarning open={showWarningRegion} backgroundColor="rgba(232, 70, 70)" onClose={() => setShowWarningRegion(false)}>
                        <p>Не выбран регион </p>
                    </IWarning>

                {/* Карточки товаров */}
                <CardList cards={cards}/>

                {/*<ICard width='560px' height='290px' background='linear-gradient(90deg, rgba(129, 106, 255, 0.6) 0.02%, rgba(170, 0, 255, 0.6) 100%)' padding='' borderRadius='25px' boxSizing='borderBox'>
                    <label className="card_label">Смена региона в Steam</label>
                    <div className="card_wrapper">
                        <img src={steam_icon} alt='steam-img' className="card_icon_steam"/>
                        <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-around'}}>

                        </div>
                    </div>
                </ICard>
                <ICard width='560px' height='290px' background='linear-gradient(90deg, rgba(129, 106, 255, 0.6) 0.02%, rgba(170, 0, 255, 0.6) 100%)' padding='' borderRadius='25px' boxSizing='borderBox'>
                    <label className="card_label">Набор для смены региона Steam</label>
                    <div className="card_wrapper">
                        <img src={steam_pack} alt='steam_pack-img' className="card_icon_geo" width={181} height={169}/>
                        <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-around'}}>
                            <button className="card_button" onClick={() => setDescrModalSecond(true)}>Описание</button>
                            <button className="card_button">Купить</button>
                        </div>
                    </div>
                </ICard>*/}
            </div>

            {/* Модальное окно КУПИТЬ для первой карточки */}
            <Modal width="560px" height="320px" open={buyModal} onClose={() => setBuyModal(false)}>
                <div className="modal_buy_header">
                    <img src={cart_icon} alt='cart-icon' width={21} height={21} className='modal_buy_icon'/>
                    <label className="modal_header_label">Покупка</label>
                    <button onClick={() => setBuyModal(false)}><img className="modal_buy_close" src={cross_icon} alt='black-cross-icon' /></button>
                </div>
                <div className="modal_buy_main">
                    <div style={{display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center'}}>
                        <img src={steam_icon} alt="small-icon-steam" width={39} height={39}/>
                        <p className="modal_buy_name">Смена региона в Steam</p>
                    </div>
                    <SelectModal options={options} value={value} onChange={handleChange} />
                    <EmailModal onSubmit={handleButtonClick}/>
                    {/* Цена каждого региона, прилетает с useState */}
                    <p className="modal_buy_total">{price} Р</p>
                    <CounterModal option={value} onCountChange={handleCountChange} />
                    <input
                        type="checkbox"
                        className="modal_buy_checkbox"
                        id="agree"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="agree">Я прочитал описание</label>
                </div>
                <div className="modal_buy_buttons">
                    <button className="modal_buy_button-close" onClick={() => setBuyModal(false)}>Закрыть</button>
                    <button type="submit" className="modal_buy_button-next" onClick={handleButtonClick}>Перейти к оплате</button>
                </div>
            </Modal>

            {/* Модальное окно ОПИСАНИЕ для первой карточки */}
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

            {/* Модальное окно ОПИСАНИЕ для второй карточки */}
            <Modal width="784px" height="312px" open={descrModalSecond} onClose={() => setDescrModalSecond(false)} padding="23px 62px" >
                <div className="modal_header_large" style={{justifyContent: 'center'}}>
                    <label className="modal_header_label_large" >Описание</label>
                    <button className='modal_large_close' onClick={() => setDescrModalSecond(false)}><img width={35} height={35} src={cross_icon} alt='black-cross-icon'/></button>
                </div>
                <p className="modal_text_large" style={{textAlign: 'left'}}>
                    В данный набор входит:<br/>
                    1) Карта, подходящая для смены региона<br/>
                    2) Инструкция по смене региона<br/>
                    3) Личный VPN - сервер и инструкция<br/>
                </p>
                <p className="modal_text_large" style={{textAlign: 'left'}}>
                    А также поддержка от продавца при проблемах.
                </p>
            </Modal>
        </div>
    )
}

export default Cards