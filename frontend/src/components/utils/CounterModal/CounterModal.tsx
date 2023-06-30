import React, {useState} from 'react';
import './CounterModal.css'
import {SelectModalOption} from "../SelectModal/SelectModal";


const CounterModal = ({ option } : any) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (option) {
            if (count < 10) {
                setCount(count + 1);
            }
        }
    };

    const decrement = () => {
        if (option) {
            if (count > 1) {
                setCount(count - 1);
            }
        }
    };

    return (
        <div className="modal_counter">
            <button
                className="modal_counter_button"
                onClick={decrement}
                style={{ background: '#F0F0F0', borderRadius: '10px 0px 0px 10px' }}
                disabled={!option}
            >
                -
            </button>
            <p className="modal_counter_count">{count}</p>
            <button
                className="modal_counter_button"
                onClick={increment}
                style={{ background: '#BB71F1', borderRadius: '0px 10px 10px 0px' }}
                disabled={!option}
            >
                +
            </button>
        </div>
    );
};

export default CounterModal;