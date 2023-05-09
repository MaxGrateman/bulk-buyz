import cart_icon from '../../../assets/cart.svg'

import './Header.css';
import ModalCart from '../modal/ModalCart'

function Header() {

    return (
            <div className="header">
                <div className="container">
                    <nav className="header_navigation">
                        <a href='#' className="navigation_logo"></a>
                        <a href='#' className="navigation_link">Поддержка</a>
                        <a href='#' className="navigation_link">Отзывы</a>
                        <a href='#' className="navigation_link">О нас</a>
                        <ModalCart/>
                    </nav>
                    <div className="under-header">
                        <div className="under-header_bb">
                            <label className="label">Bb shop</label>
                            <div className="sublabel">Bulkbuyz - открой новые возможности в Steam
                                сменив регион в нашем магазине</div>
                            <button className="under-header_button">
                                <span className="circle" aria-hidden="true">
                                  <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Купить</span>
                            </button>
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