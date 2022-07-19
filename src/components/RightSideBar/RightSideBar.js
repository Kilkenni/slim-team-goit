import { useState, useEffect } from 'react';
import styles from './RightSideBar.module.scss';
import { getCurrentUser, getProductsOfDay } from '../../js/backendAPI';

export default function RightSideBar({ date, userParams, userProducts }) {
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState(null);
  const chosenDate = date.toLocaleDateString().replace(/\./g, '.') 

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

  useEffect(() => {
    async function fetchProductsOfDay() {
      if (chosenDate || products) {
        getProductsOfDay(chosenDate).then(setProducts)
      }
    }
    fetchProductsOfDay();
  }, [chosenDate, products]);

  const dailyRate = () => {
    if (userData?.parameters?.calories) {
      return userData.parameters.calories;
    }
    return false;
  };

  const totalCaloriesOfDay = () => {
    if (products) {
      return products.map(product => product.calories).reduce((previousValue, number) => {
        return previousValue + number;
      }, 0)
      
    } 
  };

  const dailyNorm = dailyRate(); //Добова норма
  const consumed = totalCaloriesOfDay(); //Спожито
  const percentOfNormal = ((consumed / dailyNorm) * 100).toFixed(1); //n% від норми
  const left = dailyNorm - consumed; //Залишилось

  return (
    <div className={styles.container}>
      <div className={styles.summery}>
        <h1 className={styles.header}>
          Звіт на <span>{date.toLocaleDateString().replace(/\./g, '/')}</span>
        </h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.text}>Залишилось</p>
            <span className={styles.text}>
              {left ? `${left} ккал` : 'невідомо'}
            </span>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Спожито</p>
            <span className={styles.text}>
              {consumed ? `${consumed} ккал` : 'невідомо'}
            </span>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Добова норма</p>
            <span className={styles.text}>
              {dailyNorm ? `${dailyNorm} ккал` : 'невідомо'}
            </span>
          </li>
          <li className={styles.item}>
            <p className={styles.last__text}>% від норми</p>
            <span className={styles.text}>
              {percentOfNormal ? `${percentOfNormal} %` : 'невідомо'}
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.norecommended}>
        <h2 className={styles.header}>Не рекомендована їжа</h2>
        <ol className={styles.list}>
          {userData ? (
            userData.notAllowedProducts.slice(0, 8).map(({ _id, title }) => (
              <li key={_id} className={styles.item}>
                <p className={styles.text}>{title.ua}</p>
              </li>
            ))
          ) : (
            <p className={styles.text}>Тут відображатиметься ваша дієта</p>
          )}
        </ol>
      </div>
    </div>
  );
}
