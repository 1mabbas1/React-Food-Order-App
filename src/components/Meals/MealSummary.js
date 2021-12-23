import styles from "./MealSummary.module.css";

function MealSummary() {
  return (
    <section className={styles.summary}>
      <h2>mmm... </h2>
      <h2>This IS a tasty burger.</h2>
      <p>
        At Big Kahuna Burger, we only use the freshest and finest ingredients.
      </p>
      <p>
        Choose from our range delicious Hawaiian burgers, delivered straight to
        your door.
      </p>
    </section>
  );
}

export default MealSummary;
