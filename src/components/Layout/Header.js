import react from "react";
import styles from "./Header.module.css";
import burgers from "../../assets/burger.jpeg";
import HeaderButton from "./HeaderButton";
import bkblogo from "../../assets/bkblogo.jpg";

function Header(props) {
  return (
    <react.Fragment>
      <header className={styles.header}>
        <img
          className={styles["logo-image"]}
          src={bkblogo}
          alt="Big Kahuna Burger Logo"
        />{" "}
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={burgers} alt="Burgers Header" />
      </div>
      <footer className={styles.footer}>© Mohammad Abbas 2022</footer>
    </react.Fragment>
  );
}

export default Header;
