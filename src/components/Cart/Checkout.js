import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const isFourChars = (value) => value.trim().length === 4;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [isFormInputValid, setIsFormInputValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = nameInputRef.current.value;
    const enteredPostal = nameInputRef.current.value;
    const enteredCity = nameInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isFourChars(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setIsFormInputValid({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: enteredPostal,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          isFormInputValid.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!isFormInputValid.name && <p>Please enter a name</p>}
      </div>
      <div
        className={`${classes.control} ${
          isFormInputValid.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!isFormInputValid.street && <p>Please enter a street</p>}
      </div>
      <div
        className={`${classes.control} ${
          isFormInputValid.postalCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!isFormInputValid.postalCode && (
          <p>Please enter a valid postal code.</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          isFormInputValid.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!isFormInputValid.city && <p>Please enter a city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
