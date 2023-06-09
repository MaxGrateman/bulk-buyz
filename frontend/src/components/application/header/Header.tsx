import cart_icon from '../../../assets/cart.svg'
import cross_icon from '../../../assets/cross-black.svg'
import './Header.css';
import ModalCart from '../modal/ModalCart'
import Modal from "../modal/ModalDefault";
import { Link} from 'react-scroll'
import React, {useState} from "react";


const Header = ({setActive} :any) => {

    const [modalCart, setModalCart] = useState(false);
    const [modalAbout, setModalAbout] = useState(false);
    const [modalSupport, setModalSupport] = useState(false);


    return (
            <div className="header">
                <div className="container">
                    <nav className="header_navigation">
                        <a href='http://localhost:5173/' className="navigation_logo"></a>

                        {/*Модальное окно поддержки*/}
                        <button className="navigation_link" onClick={() => setModalSupport(true)}>Поддержка</button>
                        <Modal active={modalSupport} setActive={setModalSupport}>
                            <div className="modal_header_large">
                                <label className="modal_header_label_large">Поддержка</label>
                                <button className='modal_header_close' onClick={() => setModalSupport(false)}><img  src={cross_icon} alt='black-cross-icon'/></button>
                            </div>
                            <p className="modal_text_large">
                                Возможно, на ваш вопрос уже имеется
                                ответ в разделе FAQ, ниже по сайту.
                            </p>
                            <p className="modal_text_large">
                                Если ваша проблема уникальна, пожалуйста,
                                свяжитесь с нами!
                            </p>
                            <button className="modal_button_large"><a>ПОМОЩЬ</a></button>
                        </Modal>
                        {/*Ссылка-якорь отзывы*/}
                        <Link activeClass="active" to="reviews" spy={true} smooth={true} duration={500} className="navigation_link">Отзывы</Link>

                        {/* Модальное окно о нас */}
                        <button onClick={() => setModalAbout(true)} className="navigation_link">О нас</button>
                        <Modal active={modalAbout} setActive={setModalAbout}>
                            <div className="modal_header_large">
                                <label className="modal_header_label_large">О нас</label>
                                <button className='modal_header_close' onClick={() => setModalAbout(false)}><img  src={cross_icon} alt='black-cross-icon'/></button>
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


                        {/*{* Модальное окно с тележкой *}*/}
                        <button className="navigation_cart" onClick={() => setModalCart(true)}>
                            <a href='#' style={{padding: '10px 0 0 10px'}}>Мои покупки</a>
                            <div className="navigation_cart_container">
                                <img src={cart_icon} alt='cart-icon' className="navigation_cart_icon"/>
                            </div>
                        </button>
                        <ModalCart active={modalCart} setActive={setModalCart}/>
                    </nav>
                    <div className="under-header">
                        <div className="under-header_bb">
                            <label className="label">Bb shop</label>
                            <div className="sublabel">Bulkbuyz - открой новые возможности в Steam
                                сменив регион в нашем магазине</div>
                            <Link to="cards" spy={true} smooth={true} duration={500}>
                                <button className="under-header_button">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Купить</span>
                                </button>
                            </Link>
                        </div>
                        <div className="under-header_video">
                            <iframe width="486" height="266" src="https://www.youtube.com/embed/-iZxviiMlkU"
                                    title="КАК СМЕНИТЬ РЕГИОН В СТИМЕ НА КАЗАХСТАН САМОСТОЯТЕЛЬНО" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Header;