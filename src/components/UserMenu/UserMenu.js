import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

import styles from "./UserMenu.module.scss";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.container}>
      <span className={styles.name}>
        Вітаю, <b>{name}!</b>
      </span>

      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Вийти
      </button>
    </div>
  );
}
