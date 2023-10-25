import React from 'react';
import { useCartContext } from '../../context/CartContext';

export const Cartwidget = () => {
    const { totalProducts } = useCartContext();

    return (
        <>
            <i className="bi bi-cart4" ></i>
            <span>{totalProducts() || ''}</span>
        </>
    );
}

export default Cartwidget;