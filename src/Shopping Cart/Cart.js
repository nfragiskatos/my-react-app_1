import React, {useState, useEffect} from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({initialItems}) {

    const initialState = JSON.parse(window.localStorage.getItem('items'));
    const [items, setItems] = useState(initialState || initialItems)
    const [count, setCount] = useState(1);

    // Gets called everytime component is rendered. Takes 2 arguments.
    // 1. Callback function
    // 2. Dependency array - a list of pieces of state that we want to monitor for changes.
    //      if any of the pieces of state changes, then the callback gets ran.
    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(items))
    }, [items]);

    useEffect(() => {
        console.log("Count EFFECT!");
    }, [count]);

    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return {...item, qty: newQty}
            }
            return item;
        })
        setItems(newItems);
    }

    const grandTotal = items.reduce((total, item) => (
        total + item.qty * item.price
    ), 0).toFixed(2)
    return (
        <div className="Cart">
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <h1 className="Cart-title">Shopping Cart</h1>
            <div className="Cart-items">
                {items.map(item => (
                    <CartItem key={item.id} updateQty={updateQty} {...item}/>
                ))}
            </div>
            <h2 className="Cart-total">
                Grand Total: ${grandTotal}
            </h2>
        </div>
    )
}

export default Cart;