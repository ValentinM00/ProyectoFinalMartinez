import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import ItemCart from '../ItemCart';



const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    
    const order = {
        buyer: {
            name: 'valentin',
            email: 'valentin_martinez00@hotmail.com.ar',
            phone: '121058125',
            address: 'oib253o'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }


    if (cart.lenght === 0) {
        return (
            <>
            <p>No hay elementos en el carrito</p>
            <Link to='/'>Hacer compras</Link>
            </>
        );
    }

    return (
        <>
            {
            cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir compra</button>
        </>
    )
}


export default Cart;