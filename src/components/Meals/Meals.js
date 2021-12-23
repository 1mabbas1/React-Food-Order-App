import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";
import react from "react";

function Meals() {
  return (
    <react.Fragment>
      <MealSummary></MealSummary>
      <AvailableMeals />
    </react.Fragment>
  );
}

export default Meals;
