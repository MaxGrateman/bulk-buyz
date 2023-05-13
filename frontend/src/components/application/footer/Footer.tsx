import './Footer.css'
import {Link} from "react-scroll";


function Footer() {

    return(
        <div className="footer">
            <div className="footer_wrapper">
                <div className="footer_wrapper_left">
                    <label className="footer_label">Bulkbuyz</label>
                    <p className="footer_underlabel">Cайт, предоставляющий услуги по смене региона в Steam.
                        Смена региона в Steam позволяет пользователям обойти
                        ограничения и купить заблокированные игры, особенно
                        актуально для пользователей из России. </p>
                    <p className="footer_pin">© 2023 bulkbuyz.ru</p>
                </div>
                <div className="footer_wrapper_right">
                    <nav className="footer_navigation">
                        <Link to="#" className="footer_link">Поддержка</Link>
                        <Link activeClass="active" to="reviews" spy={true} smooth={true} duration={500} className="footer_link">Отзывы</Link>
                        <Link to="#" className="footer_link">О нас</Link>
                    </nav>
                    <div className="footer_credits">© Created by Max Astakhov & Sergey Sidorov</div>
                </div>
            </div>
        </div>
    )
}

export default Footer