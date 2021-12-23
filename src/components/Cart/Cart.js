import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "a1", name: "bkb", amount: 2, price: 10 }].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>23</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button}>Order</button>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
