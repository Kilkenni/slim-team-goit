import { createPortal } from 'react-dom';
import styles from './ModalAlert.module.scss';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

function ModalAlert({ onClose, onBtnClick, btnTitle, title, id, date }) {
  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    onClose();
  }

  useEffect(() => {
    function closeOnKeydown(event) {
      if (event.code === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', closeOnKeydown);
    return () => window.removeEventListener('keydown', closeOnKeydown);
  }, [onClose]);

  return createPortal(
    <div className={styles.backdrop} onClick={closeOnBackdrop}>
      <div className={styles.modal}>
        <div className={styles.contentBlock}>
          <h3 className={styles.title}>{title}</h3>
          <button
            type="button"
            className={styles.btn}
            onClick={() => onBtnClick(id, date)}
          >
            {btnTitle}
          </button>
          <button
            type="button"
            className={styles.btn__second}
            onClick={onClose}
          >
            Відмінити
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default ModalAlert;
