import styles from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

function Checkout(props) {
  const [formValidity, setformValidity] = useState({
    name: true,
    num: true,
    street: true,
    city: true,
    post: true,
  });

  const nameInputRef = useRef();
  const numInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postInputRef = useRef();

  function confirmHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredNum = numInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPost = postInputRef.current.value;

    const nameValid = !isEmpty(enteredName);
    const numValid = !isEmpty(enteredNum);
    const streetValid = !isEmpty(enteredStreet);
    const cityValid = !isEmpty(enteredCity);
    const postValid = !isEmpty(enteredPost);

    setformValidity({
      name: nameValid,
      num: numValid,
      street: streetValid,
      city: cityValid,
      post: postValid,
    });

    const fromValid =
      nameValid && numValid && streetValid && cityValid && postValid;
    console.log(formValidity);

    if (!fromValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      num: enteredNum,
      street: enteredStreet,
      city: enteredCity,
      post: enteredPost,
    });
  }

  const nameControlClasses = `${styles.control} ${
    formValidity.name ? "" : styles.invalid
  }`;
  const numControlClasses = `${styles.control} ${
    formValidity.num ? "" : styles.invalid
  }`;
  const streetControlClasses = `${styles.control} ${
    formValidity.street ? "" : styles.invalid
  }`;
  const postalCodeControlClasses = `${styles.control} ${
    formValidity.post ? "" : styles.invalid
  }`;
  const cityControlClasses = `${styles.control} ${
    formValidity.city ? "" : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter a valid name.</p>}

        <div className={numControlClasses}>
          <label htmlFor="num">House Number</label>
          <input type="number" id="num" ref={numInputRef} />
          {!formValidity.num && <p>Please enter a valid house number.</p>}
        </div>

        <div className={streetControlClasses}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetInputRef} />
          {!formValidity.street && <p>Please enter a valid street name.</p>}
        </div>

        <div className={cityControlClasses}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityInputRef} />
          {!formValidity.city && <p>Please enter a valid city.</p>}
        </div>

        <div className={postalCodeControlClasses}>
          <label htmlFor="post">Post Code</label>
          <input type="text" id="post" ref={postInputRef} />
          {!formValidity.post && <p>Please enter a valid post code.</p>}
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
