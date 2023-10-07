import React, {useState, useEffect } from 'react';
import './style.css';


export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setcount] = useState(parseInt(initial));

    const restar = () => {
        setcount(count - 1)
    }

    const sumar = () => {
        setcount(count + 1)
    }

    useEffect(() => {
        setcount(parseInt(initial));
    }, [initial])

    return (
        <div className='counter'>
            <button disabled = {count <= 1} onClick={restar}>-</button>
            <span>{count}</span>
            <button disabled = {count >= stock} onClick={sumar}>+</button>
            <div>
                <button disabled = {stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>

    );

}

export default ItemCount;