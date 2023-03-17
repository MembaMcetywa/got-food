import React, { useContext } from "react";

import CartContext from "../../store/cart-context";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const num = parseFloat(cartCtx.totalAmount);
  const totalAmount = num;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>R{totalAmount ? totalAmount : 0.0}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button-alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
