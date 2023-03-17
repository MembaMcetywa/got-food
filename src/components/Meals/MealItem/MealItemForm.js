import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isAmountValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const convertedAmount = parseInt(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      convertedAmount < 1 ||
      convertedAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(convertedAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
