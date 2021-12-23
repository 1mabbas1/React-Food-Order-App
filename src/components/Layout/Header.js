import react from "react";
import styles from "./Header.module.css";
import burgers from "../../assets/burger.jpeg";
import HeaderButton from "./HeaderButton";

function Header(props) {
  return (
    <react.Fragment>
      <header className={styles.header}>
        <h1>Big Kahuna Burger</h1>
        <HeaderButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={burgers} alt="Burgers Header" />
      </div>
    </react.Fragment>
  );
}

export default Header;
