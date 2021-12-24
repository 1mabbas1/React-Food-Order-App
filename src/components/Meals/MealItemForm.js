import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";

function MealItemForm(props) {
  const [amountValid, setAmountValid] = useState(true);

  const amountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredValue = amountInputRef.current.value;
    const enteredAmount = +enteredValue;

    if (
      enteredValue.trim().length === 0 ||
      enteredAmount > 5 ||
      enteredAmount < 1
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          default: "1",
        }}
      />

      <button style={{ marginTop: "70px" }}>Add</button>
      {!amountValid && <p>Enter a valid amount.</p>}
    </form>
  );
}

export default MealItemForm;
