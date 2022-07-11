import styles from "./Modal.module.scss";

const Modal = function ({ children, ...otherProps }) {
  
  return (<div className={styles.modal}>
    {children};
  </div>);
}

export default Modal;