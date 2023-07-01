import React, {useEffect, useState} from 'react';
import './CounterModal.css'
import {SelectModalOption} from "../SelectModal/SelectModal";


const CounterModal = ({ option, onCountChange }: any) => {
    const [count, setCount] = useState(1);

    // Обновление цены при изменении значения счётчика или выбранного варианта
    useEffect(() => {
        if (option) {
            const initialPrice = option.price;
            const updatedPrice = count * initialPrice;
            onCountChange(updatedPrice);
        }
    }, [count, option, onCountChange]);

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
                onClick={() => setCount(prevCount => Math.max(prevCount - 1, 1))}
                style={{ background: '#F0F0F0', borderRadius: '10px 0px 0px 10px' }}
                disabled={!option}
            >
                -
            </button>
            <p className="modal_counter_count">{count}</p>
            <button
                className="modal_counter_button"
                onClick={() => setCount(prevCount => Math.min(prevCount + 1, 10))}
                style={{ background: '#BB71F1', borderRadius: '0px 10px 10px 0px' }}
                disabled={!option}
            >
                +
            </button>
        </div>
    );
};

export default CounterModal;