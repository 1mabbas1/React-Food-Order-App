import styles from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";

function HeaderButton() {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>total</span>
    </button>
  );
}

export default HeaderButton;
