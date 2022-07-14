import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

import Header from "../Header";
import { useMediaQuery } from "../../js/hooks";
import btnClose from "./btnClose.svg";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

/**
 * 
 * @param {!function} onClose - функція, яка вимикає модальне вікно
 * @returns Модальне вікно з контентом, переданим як діти. В мобільній версії автоматично включає в себе Header.
 */
function Modal({ onClose, children, ...otherProps }) {
  const tabletSize = getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-tablet");
  const isMobile = useMediaQuery(`(max-width: ${tabletSize})`);

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
        {isMobile && <Header />}
        <div className={styles.closeBlock}>
          <button type="button" className={styles["btn-close"]} onClick={onClose}>
            {isMobile ?
              <svg alt="Close icon" width="12" className={styles["btn-close-icon"]}>
                <use href={btnClose + "#btnCloseMob"}></use>
              </svg> :
              <svg alt="Close icon" width="12" className={styles["btn-close-icon"]}>
                <use href={btnClose + "#btnClose"}></use>
              </svg>
            }  
          </button>
        </div>
        <div className={styles.contentBlock}>
          {children}
        </div>   
      </div> 
    </div>
    , modalRoot);
}

export default Modal;