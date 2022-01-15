import React from "react";
import styles from "./Button.module.scss";

const Button = ({ type="button", label, onClick }) => {
  return (
    <div className={styles["button"]}>
      <button type={type} onClick={onClick}>{label}</button>
    </div>
  );
};

export default Button;
