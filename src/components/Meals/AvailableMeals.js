import styles from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./DummyMeals.js";
import Card from "../UI/Card";
import MealItem from "./MealItem";

function AvailableMeals() {
  const mealslist = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
