import React from "react";
import ReactDOM from "react-dom";
import Button from "../../layouts/Button/Button";
import styles from "./Modal.module.scss";

const Backdrop = ({onClose}) => {
  return (
    <div className={styles['backdrop']} onClick={onClose}></div>
  )
}

const ModalOverlay = ({children, onClose}) => {
  return (
    <div className={styles['modal']}>
      <div className={styles['content']}>
        <p>{children}</p>
        <Button label="Close" onClick={onClose}/>
      </div>
    </div>
  )
}

const portalElement = document.getElementById('modal');

const Modal = ({onClose, children}) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onClose={onClose}>{children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal;