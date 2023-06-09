import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import mealsImg from "../../assets/meals.jpeg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Got Food?</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
