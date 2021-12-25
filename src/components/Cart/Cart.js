import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import react, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const [checkingout, setCheckingout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Submitted, setSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
  const cartHasItems = cartCtx.items.length > 0;

  function removeItemHandler(id) {
    cartCtx.removeItem(id);
  }

  function addItemHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  function orderHandler() {
    setCheckingout(true);
  }

  async function submitOrderHandler(userdata) {
    setIsSubmitting(true);
    await fetch(
      "https://big-kahuna-brgr-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userdata, orderedItems: cartCtx.items }),
      }
    );
    setIsSubmitting(false);
    setSubmitted(true);
    cartCtx.clearCart();
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {cartHasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <react.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      {checkingout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onCloseCart} />
      )}
      {!checkingout && modalActions}
    </react.Fragment>
  );

  const isSubmittingModalContent = (
    <react.Fragment>
      <p>Sending order...</p>
    </react.Fragment>
  );
  const didSubmit = (
    <react.Fragment>
      <p>Order successful!</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    </react.Fragment>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {!isSubmitting && !Submitted && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && Submitted && didSubmit}
    </Modal>
  );
}

export default Cart;
