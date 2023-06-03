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
                    <Accordion data={accordionData}/>
                </div>
            </div>
        </div>
    )
}


export default Support;