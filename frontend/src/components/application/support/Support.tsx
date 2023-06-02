import './Support.css'
import React from "react";
import Accordion from "../../interfaces/Accordion/Accordion";

    const Support: React.FC = () => {

    const accordionData = [
        {
            title: 'Что мне будет доступно после смены региона?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Что мне будет доступно после смены региона?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Что мне будет доступно после смены региона?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Что мне будет доступно после смены региона?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Что мне будет доступно после смены региона?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    ];

    return (
        <div className="support">
            <div className="support_wrapper">
                <label className="support_label">FAQ</label>
                <p className="support_underlabel">Часто заводаемые вопросы</p>
                <div>
                    {/*<button className="accordion">Что мне будет доступно после смены региона?</button>
                    <div className="support_accordion">
                        <p className="support_bar_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>*/}

                        <Accordion data={accordionData}/>


                   {/* <button className="support_accordion">Какие данные я должен предоставить для смены региона?</button>
                    <div className="support_bar">
                        <p className="support_bar_text">Какие данные я должен предоставить для смены региона?</p>
                    </div>

                    <button className="support_accordion">Могу ли я вам доверять?</button>
                    <div className="support_bar">
                        <p className="support_bar_text">Могу ли я вам доверять?</p>
                    </div>

                    <button className="support_accordion">Что делать если Макс не хочет работать?</button>
                    <div className="support_bar">
                        <p className="support_bar_text">Что делать если Макс не хочет работать?</p>
                    </div>

                    <button className="support_accordion">Как заставить Макса работать?</button>
                    <div className="support_bar">
                        <p className="support_bar_text">Как заставить Макса работать?</p>
                    </div>*/}

                </div>
            </div>
        </div>
    )
}


export default Support;