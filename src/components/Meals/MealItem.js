import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `£${props.price.toFixed(2)}`;
  function AddToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
