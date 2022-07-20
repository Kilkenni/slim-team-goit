import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { useNavigate, NavLink, Link } from 'react-router-dom';

import styles from './UserMenu.module.scss';

export default function UserMenu({ ...DOMprops }) {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const navigate = useNavigate();

  function handleClick() {
    dispatch(authOperations.logOut());
    navigate('/login', { replace: true });
  }

  return (
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>
      {/* <NavLink
        to="/login"
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
        {...DOMprops}
      >
        Вийти
      </NavLink> */}
      {/* <NavLink to="/login"> */}
      <button
        className={styles.button}
        type="button"
        onClick={handleClick}
        {...DOMprops}
      >
        Вийти
      </button>
      {/* </NavLink> */}
    </div>
  );
}
