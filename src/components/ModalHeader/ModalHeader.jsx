import { createPortal } from "react-dom";
import styles from "./ModalHeader.module.scss";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

/**
 * 
 * @param {!function} onClose - функція, яка вимикає модальне вікно
 * @returns Модальне вікно з контентом, переданим як діти. В мобільній версії автоматично включає в себе Header.
 */
function ModalHeader({ onClose, children, ...otherProps }) {

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    onClose();
  }

  useEffect(() => {
    function closeOnKeydown(event) {
      if (event.code === "Escape") {
        onClose();
      }
    }
    
    window.addEventListener("keydown", closeOnKeydown);

    return () => window.removeEventListener("keydown", closeOnKeydown);
  }, [onClose]);
  
  return createPortal(
    <div className={styles.backdrop} onClick={closeOnBackdrop}>
      <div className={styles.modal}>
        <div className={styles.contentBlock}>
          {children}
        </div>   
      </div> 
    </div>
    , modalRoot);
}

export default ModalHeader;