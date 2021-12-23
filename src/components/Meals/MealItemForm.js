import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";

function MealItemForm() {
  return (
    <form className={styles.form} action="">
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          default: "1",
        }}
      />

      <button style={{ marginTop: "70px" }}>Add</button>
    </form>
  );
}

export default MealItemForm;
