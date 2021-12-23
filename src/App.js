import Header from "./components/Layout/Header";
import react, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  function showCartHandler() {
    setShowCart(true);
  }

  function hideCartHandler() {
    setShowCart(false);
  }

  return (
    <react.Fragment>
      {showCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </react.Fragment>
  );
}

export default App;
