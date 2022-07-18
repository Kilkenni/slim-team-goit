import { createPortal } from "react-dom";
import styles from "./ModalHeader.module.scss";
import { useEffect } from "react";
import { useMediaQuery } from "../../js/hooks";
import btnClose from "./btnClose.svg";
import Logo from "../Logo"
import UserMenu from "../UserMenu";

const modalRoot = document.querySelector("#modal-root");

/**
 * 
 * @param {!function} onClose - функція, яка вимикає модальне вікно
 * @returns Модальне вікно з контентом, переданим як діти. В мобільній версії автоматично включає в себе Header.
 */
function ModalHeader({ onClose, children, ...otherProps }) {
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
        <div className={styles.header}>
          <Logo onClick={() => onClose(true)}/>
          {!isMobile && <UserMenu />}
          <button type="button" className={styles.button} onClick={onClose}>
            <svg alt="menu icon" width="18" height="18" className={styles.icon}>
              <use href={`${btnClose}#btnClose`}></use>
            </svg>
          </button>
        </div>
        <div className={styles.contentBlock}>
          {children}
        </div>   
      </div> 
    </div>
    , modalRoot);
}

export default ModalHeader;