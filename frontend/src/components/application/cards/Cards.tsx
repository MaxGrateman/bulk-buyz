import "./Cards.css"
import "./../modal/ModalBuy.css"

import CardList from "../../interfaces/CardList/CardList";
import Modal, {ModalVariant} from "../modal/Modal";
import EmailModal from "../../utils/EmailModal/EmailModal";
import React, {useEffect, useRef, useState} from "react";
import CounterModal from "../../utils/CounterModal/CounterModal";
import {SelectModal, SelectModalOption} from "../../utils/SelectModal/SelectModal";
import IWarning from "../../interfaces/IWarning/IWarning";

import cross_icon from "../../../assets/modal-cross.svg";
import cart_icon from "../../../assets/cart.svg";
import {ICard, IVariant} from "../../types/types";
import axios from "axios";
import nl2br from 'react-nl2br';


function Cards() {
    const [cards, setCards] = useState<ICard[]>([])
    const [selectedVariant, setSelectedVariant] = useState<IVariant | null>(null);
    const [selectedCard, setSelectedCard] = useState<ICard | null>(null);

    interface CardsData {
        card: ICard[];
    }

    useEffect(() => {
        fetchCards();
    }, [])

    const handleBuyClick = (card: ICard) => {
        setSelectedCard(card);
        if (card.variants && card.variants.length > 0) {
            setSelectedVariant(card.variants[0]);
        } else {
            setSelectedVariant(null);
        }
        setBuyModal(true);
    };

    const handleDescrClick = (card: ICard) => {
        setSelectedCard(card)
        setDescrModal(true)
    }

    const fetchCards = async () => {
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
            const cardsData = response.data;// Log the response data to verify its structure
            setCards(cardsData || []);
            if (cardsData && cardsData.length > 0) {
                setSelectedCard(cardsData[0]);
                if (cardsData[0].variants && cardsData[0].variants.length > 0) {
                    setSelectedVariant(cardsData[0].variants[0]);
                }
            }
        } catch (e) {
            alert(e);
        }
    };

    const [buyModal, setBuyModal] = useState(false)
    const [descrModal, setDescrModal] = useState(false)

    /* useStates которые отвечают за value и price выбраного селектора */
    const [value, setValue] = useState<SelectModalOption | undefined>();
    const [price, setPrice] = useState<number>(0);
    const [userEmail, setUserEmail] = useState('');
    const [quantity, setQuantity] = useState(1);

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
    }

    useEffect(() => {

    })

    function handleCountChange(updatedPrice: number, count: number) {
        setPrice(updatedPrice);
        setQuantity(count);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value);
    };

    const handleCheckboxChange = (event : any) => {
        setIsChecked(event.target.checked);
    };

    const handleCloseModal = () => {
        setBuyModal(false)
        setPrice(0)
        setQuantity(1)
        setValue(undefined)
        setUserEmail('')
        setIsChecked(false);
    }

    useEffect(() => {
        if (value) {
            setShowWarningRegion(false);
        }
    }, [value]);

    const handleButtonClick = async ()  => {
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

        {/*Формируем информацию для отправки*/}
        const formData = {
            email: userEmail,
            selectorValue: value,
            cardName: selectedCard?.name,
            quantity: quantity,
            totalPrice: price,
        }
        {/* post-запрос на отправку бэкенду */}
        try {
            const response = await axios.post(
                'http://localhost:8080/backend/processForm.php',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            // Добавляем проверку на успешный статус ответа (200)
            if (response.status === 200 && value && isChecked) {
                // Перенаправляем пользователя на указанный URL
                window.location.href = response.data.redirectUrl;
            } else {
                // Обрабатываем ошибку в случае некорректного статуса ответа
                console.error('Ошибка при выполнении запроса:', response);
            }
        } catch (error) {
            // Обрабатываем ошибку в случае сетевой ошибки или ошибки на сервере
            console.error('Ошибка при выполнении запроса:', error);
        }
    }



    return (
    <div className="cards" id="cards">
        <h2 className="cards_label">Смена региона Steam</h2>
        <h6 className="cards_sublabel">Оформи покупку в несколько кликов</h6>
        <div className="cards_wrapper">


            {/* Карточки товаров */}
            <div className="cards_scroll">
                <CardList cards={cards} handleBuyClick={handleBuyClick} handleDescrClick={handleDescrClick}/>
            </div>

            <IWarning open={showWarningRegion} backgroundColor="rgba(232, 70, 70)" onClose={() => setShowWarningRegion(false)}>
                <p>Не выбран товар</p>
            </IWarning>
            {/* Модальное окно КУПИТЬ для карточки */}
            <Modal width="560px" height="360px" open={buyModal} onClose={handleCloseModal} variant={ModalVariant.transparent}>
                <div className="modal_buy_header">
                    <img src={cart_icon} alt="cart-icon" width={21} height={21} className="modal_buy_icon" />
                    <p className="modal_header_label">Покупка</p>
                    <button onClick={handleCloseModal}>
                        <img className="modal_buy_close" src={cross_icon} alt="black-cross-icon" />
                    </button>
                </div>
                <div className="modal_buy_main">
                     <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center', textAlign: 'left' }}>
                         <img src={selectedCard?.img} alt="small-icon-steam" width={39} height={39} />
                         <p className="modal_buy_name">{selectedCard?.name}</p>
                     </div>
                    <p className="modal_buy_total">{price} Р</p>
                    <SelectModal options={selectedCard?.variants || []} value={value} onChange={handleChange} />
                    <CounterModal option={value} onCountChange={handleCountChange} handleButtonClick={handleButtonClick}/>
                    <EmailModal value={userEmail} onChange={handleEmailChange}/>
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
                    <button className="modal_buy_button-close" onClick={handleCloseModal}>
                        Закрыть
                    </button>
                    <button type="submit" className="modal_buy_button-next" onClick={handleButtonClick}>
                        Перейти к оплате
                    </button>
                </div>
            </Modal>

            {/*Модальное окно ОПИСАНИЕ для карточки*/}
            <Modal width="784px" height="312px" open={descrModal} onClose={() => setDescrModal(false)} padding="33px 72px 5px">
                <div className="modal_header_large" style={{ justifyContent: 'center' }}>
                    <p className="modal_header_label_large">Описание</p>
                    <button className="modal_large_close" onClick={() => setDescrModal(false)}>
                        <img width={35} height={35} src={cross_icon} alt="black-cross-icon" />
                    </button>
                </div>
                <p className="modal_text_large" style={{ textAlign: 'left' }}>
                    {nl2br(selectedCard?.description)}
                </p>
            </Modal>
        </div>
    </div>
    )
}

export default Cards