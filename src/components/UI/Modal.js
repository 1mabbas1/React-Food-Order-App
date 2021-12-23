import styles from "./Modal.module.css";
import reactDOM from "react-dom";
import react from "react";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <react.Fragment>
      {reactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {reactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </react.Fragment>
  );
}

export default Modal;
