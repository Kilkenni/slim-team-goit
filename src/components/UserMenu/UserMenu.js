import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import ModalAlert from '../ModalAlert';
import styles from './UserMenu.module.scss';

export default function UserMenu({ ...DOMprops }) {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onLogout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>

      <button
        className={styles.button}
        type="button"
        onClick={toggleModal}
        {...DOMprops}
      >
        Вийти
      </button>
      {showModal && (
        <ModalAlert
          title="Ви дійсно хочете вийти з облікового запису?"
          btnTitle="Так, вийти"
          onBtnClick={onLogout}
          onClose={toggleModal}
        />
      )}
    </div>
  );
}
