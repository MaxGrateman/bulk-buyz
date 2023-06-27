import React, {useState} from 'react';
import './CounterModal.css'

const CounterModal = () => {
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="modal_counter">
            <button className="modal_counter_button" onClick={decrement} style={{background: '#F0F0F0', borderRadius: '10px 0px 0px 10px'}}>-</button>
            <p className="modal_counter_count">{count}</p>
            <button className="modal_counter_button" onClick={increment} style={{background: '#BB71F1', borderRadius: '0px 10px 10px 0px'}}>+</button>
        </div>
    );
};

export default CounterModal;