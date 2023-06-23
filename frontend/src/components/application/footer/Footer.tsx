import './Footer.css'
import {Link} from "react-scroll";

import telegram_icon from '../../../assets/telegram.svg'
import email_icon from '../../../assets/email.png'
import gmail_icon from '../../../assets/gmail.png'


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
                        {/*<Link to="#" className="footer_link">Поддержка</Link>
                        <Link  to="reviews" spy={true} smooth={true} duration={500} className="footer_link">Отзывы</Link>
                        <Link to="#" className="footer_link">О нас</Link>*/}
                        <img src={telegram_icon} alt="telegram" width={50} height={50}/>
                        <img src={email_icon} alt="email" width={50} height={50}/>
                        <img src={gmail_icon} alt="gmail" width={50} height={50}/>
                    </nav>
                    <div className="footer_credits">© Created by Max Astakhov & Sergey Sidorov</div>
                </div>
            </div>
        </div>
    )
}

export default Footer