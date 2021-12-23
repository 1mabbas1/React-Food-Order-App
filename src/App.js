import Header from "./components/Layout/Header";
import react from "react";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <react.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </react.Fragment>
  );
}

export default App;
