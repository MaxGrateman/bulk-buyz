import './Footer.css'
import {Link} from "react-scroll";
import vk_icon from '../../../assets/vk-icon.svg'
import telegram_icon from '../../../assets/telegram-icon.svg'

function Footer() {

    return(
        <div className="footer">
            <div className="footer_wrapper">
                <div className="footer_wrapper_left">
                    <h3 className="footer_label">Bulkbuyz</h3>
                    <p className="footer_underlabel">Cайт, предоставляющий услуги по смене региона в Steam.
                        Смена региона в Steam позволяет пользователям обойти
                        ограничения и купить заблокированные игры, особенно
                        актуально для пользователей из России. </p>
                    <p className="footer_pin">© 2023 bulkbuyz.ru</p>
                </div>
                <div className="footer_wrapper_right">
                    <nav className="footer_navigation">
                        <a href="https://t.me/Siiiiiiiiiiiiiiiiiiiiiiu" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="footer_link">
                                <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" className="footer_icon_fill" />
                            </svg>
                        </a>
                        <a href="https://vk.com/belettery21" target="_blank">
                            <svg viewBox="0 -121 512 512" xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="footer_link">
                                <path d="m457.742188 95.480469c52.980468-71.726563 41.230468-73.070313 54.257812-95.480469h-101.527344s-7.214844 25.050781-9.417968 29.535156c-19.5 39.660156-63.238282 99.167969-89.691407 105.25-26.046875 5.992188-22.589843-55.5625-20.984375-82.226562 1.511719-24.714844 1.253906-33.363282.527344-37.632813-1.0625-6.238281-6.296875-10.789062-12.578125-11.582031-12.949219-1.640625-36.445313-3.960938-62.757813-2.742188l-23.539062.78125c9.28125 20.761719 15.550781 14.398438 18.96875 38.417969 3.859375 28.121094 2.339844 96.546875-25.355469 96.546875-44.398437 0-94.234375-133.34375-95.820312-136.347656h-89.824219l8.21875 20.566406c66.238281 165.820313 149.082031 242.621094 262.429688 249.007813l14.75.425781 1.054687-14.324219c1.59375-22.121093 12.691406-53.964843 32.375-53.964843 29.082031 0 37.484375 8.46875 56.664063 32.167968 18.441406 22.722656 31.148437 36.121094 60.90625 36.121094h75.601562l-10.78125-21.679688c-16.835938-33.800781-50.605469-62.777343-63.792969-79.585937-4.777343-6.328125-9.480469-16.332031-4.613281-28.433594 3.980469-10.539062 15.832031-32.519531 24.929688-44.820312zm0 0" className="footer_icon_fill"/>
                            </svg>
                        </a>
                    </nav>
                    <div className="footer_credits">© Created by Max Astakhov & Sergey Sidorov</div>
                </div>
            </div>
        </div>
    )
}

export default Footer