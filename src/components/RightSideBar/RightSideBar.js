import { useState, useEffect } from 'react';
import styles from './RightSideBar.module.scss';
import { getCurrentUser } from '../../js/backendAPI';

export default function RightSideBar({ date, userParams, userProducts }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function fetchUserData() {
      if (userParams && userProducts) {
        //якщо ми отримали параметри користувача як пропси - запишемо в стейт
        setUserData({
          parameters: userParams,
          notAllowedProducts: userProducts,
        });
        return; //і вийдемо
      }
      const currentUser = await getCurrentUser(); //а якщо не отримали - запитаємо ці параметри з бекенда
      setUserData(currentUser); //і теж запишемо в стейт
    }
    fetchUserData();
  }, [userParams, userProducts]);

  return (
    <div className={styles.container}>
      <div className={styles.summery}>
        <h1 className={styles.header}>
          Звіт на{' '}
          <span>{new Date(date).toLocaleDateString().replace(/\./g, '/')}</span>
        </h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.text}>Залишилось</p>
            <span className={styles.text}>000 ккал</span>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Спожито</p>
            <span className={styles.text}>000 ккал</span>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Добова норма</p>
            <span className={styles.text}>
              {userData?.parameters?.calories
                ? `${userData.parameters.calories} ккал`
                : 'невідомо'}
            </span>
          </li>
          <li className={styles.item}>
            <p className={styles.last__text}>n% від норми</p>
            <span className={styles.text}>000 %</span>
          </li>
        </ul>
      </div>
      <div className={styles.norecommended}>
        <h2 className={styles.header}>Не рекомендована їжа</h2>
        <p className={styles.text}>Тут відображатиметься ваша дієта</p>
      </div>
    </div>
  );
}
