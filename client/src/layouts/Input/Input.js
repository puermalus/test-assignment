import React, { useEffect, useState } from "react";
import styles from "./Input.module.scss";

const Input = ({label, input, onChange}) => {
  const [inputVal, setInputVal] = useState({
    id: '',
    value: '',
    type: ''
  });

  const onChangeHandler = (e, id, type) => {
    setInputVal(() => {
      return {
        id,
        type,
        value: e.target.value
      }
    })
  }

  useEffect(() => {
    setInputVal(() => {
      return {
        id: input._id,
        value: "",
        type: input.type
      }
    })
  }, [])
  
  useEffect(() => {
    let timer;
    if(inputVal.id) {
      timer = setTimeout(() => {
        onChange(inputVal);
      }, 300)
    }

    return () => {
      clearTimeout(timer);
    }
  }, [inputVal])

  return (
    <div className={styles["input"]}>
      <label htmlFor={input["_id"]}>{label}</label>
      <input id={input["_id"]} value={inputVal.value} {...input} onChange={e => onChangeHandler(e, input["_id"], input["type"])}/>
    </div>
  );
};

export default Input;