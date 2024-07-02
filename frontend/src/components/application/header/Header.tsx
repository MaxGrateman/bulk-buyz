import cart_icon from '../../../assets/cart.svg'
import cross_icon from '../../../assets/modal-cross.svg'

import { Link } from 'react-scroll'
import React, {useState} from "react";

import EmailForm from "../../utils/EmailForm";
import './Header.css';
import Modal from "../modal/Modal";
import YouTubeVideoFacade from "../../utils/YouTubeVideo";

const Header = () => {
    const [cartModal, setCartModal] = useState(false)
    const [supportModal, setSupportModal] = useState(false)
    const [aboutModal, setAboutModal] = useState(false)




    return (
            <div className="header">
                <div className="container">
                    <nav className="header_navigation">
                        <a href='https://bulkbuyz.ru' className="navigation_logo"></a>

                        {/*Модальное окно поддержки*/}
                        <button className="navigation_link" onClick={() => setSupportModal(true)}>Поддержка</button>


                        {/*Ссылка-якорь отзывы*/}
                        <Link activeClass="active" to="reviews" spy={true} smooth={true} duration={200} className="navigation_link">Отзывы</Link>

                        {/* Модальное окно о нас */}
                        <button  className="navigation_link" onClick={() => setAboutModal(true)}>О нас</button>


                        {/*{* Модальное окно с тележкой *}*/}
                        <button className="navigation_cart" onClick={() => setCartModal(true)}>
                            <a href='#' style={{padding: '10px 0 0 10px'}}>Мои покупки</a>
                            <div className="navigation_cart_container">
                                <img src={cart_icon} alt='cart-icon' className="navigation_cart_icon"/>
                            </div>
                        </button>
                    </nav>



                    {/* Секция с видео и остальным под нав баром*/}
                    <div className="under-header">
                        <div className="under-header_bb">
                            <h1 className="label">Bb shop</h1>
                            <h2 className="sublabel">Bulkbuyz - открой новые возможности в Steam
                                сменив регион в нашем магазине</h2>
                            <Link to="cards" spy={true} smooth={true} duration={200}>
                                <button className="under-header_button">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Купить</span>
                                </button>
                            </Link>
                        </div>
                        <div className="under-header_video">
                            <YouTubeVideoFacade videoId="-iZxviiMlkU"/>
                        </div>
                    </div>
                </div>
                <Modal open={cartModal} onClose={() => setCartModal(false)} width="354px" height="172px">
                    <div className="modal_header_cart">
                        <img src={cart_icon} alt='cart-icon' width={24} height={24}/>
                        <p className="modal_header_label">История покупок</p>
                        <button onClick={() => setCartModal(false)}><img className="modal_header_close" src={cross_icon} alt='black-cross-icon' /></button>
                    </div>
                <EmailForm/>
                </Modal>
                <Modal width="784px" height="312px" padding="25px 50px 8px 50px" open={supportModal} onClose={() => setSupportModal(false)}>
                    <div className="modal_header_large">
                        <label className="modal_header_label_large">Поддержка</label>
                        <button className='modal_large_close' onClick={() => setSupportModal(false)}><img width={35} height={35} src={cross_icon} alt='black-cross-icon'/></button>
                    </div>
                    <p className="modal_text_large">
                        Возможно, на ваш вопрос уже имеется
                        ответ в разделе FAQ, ниже по сайту.
                    </p>
                    <p className="modal_text_large">
                        Если ваша проблема уникальна, пожалуйста,
                        свяжитесь с нами!
                    </p>
                    <a href='https://chat.digiseller.ru/asp/start.asp?fr=g&user=1097528&service=1&shop=1&lang=ru-RU' target="_blank" style={{alignSelf: 'center'}}><button  className="modal_button_large">ПОМОЩЬ</button></a>
                </Modal>
                <Modal width="784px" height="312px" padding="25px 20px 8px 50px" open={aboutModal} onClose={() => setAboutModal(false)}>
                    <div className="modal_header_large">
                        <label className="modal_header_label_large">О нас</label>
                        <button className='modal_large_close' onClick={() => setAboutModal(false)}><img width={35} height={35} src={cross_icon} alt='black-cross-icon'/></button>
                    </div>
                    <p className="modal_text_large">
                        Bulkbuyz - официальный сайт,
                        предоставляющий пользователем возможность
                        сменить регион в магазине Steam. Мы успешно
                        занимаемся этой деятельностью уже более 1
                        года и имеем множество положительных
                        отзывов от наших клиентов.
                    </p>

                </Modal>
            </div>

    );
};

export default Header;