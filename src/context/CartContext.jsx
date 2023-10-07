import React from "react";
export const CartContext = React.createContext();


const CartProvider = ({ Children }) => {



    return (
        <CartContext.Provider value='Pablo'>
            {Children}
        </CartContext.Provider>
    )
}

export default CartProvider