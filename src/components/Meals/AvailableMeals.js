import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import { useEffect, useState } from "react";

function AvailableMeals() {
  const [meals, setmeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://big-kahuna-brgr-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setmeals(loadedMeals);
      setisLoading(false);
    };

    fetchMeals().catch((error) => {
      setisLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.Loading}>
        <h3>Loading...</h3>
      </section>
    );
  }

  if (Error) {
    return (
      <section className={styles.Loading}>
        <h3>{Error}</h3>
      </section>
    );
  }

  const mealslist = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
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
