import { useState, useEffect } from 'react';
import styles from './RightSideBar.module.scss';
import { getCurrentUser, getProductsOfDay } from '../../js/backendAPI';

export default function RightSideBar({ userParams, userProducts }) {
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState(null);
  const date = new Date().toLocaleDateString().replace(/\./g, '.') 
  

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
      if (date || products) {
        getProductsOfDay(date).then(setProducts)
      }
    }
    fetchProductsOfDay();
  }, [date, products]);

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
  const percentOfNormal = ((consumed / dailyNorm) * 100); //n% від норми
  const left = dailyNorm - consumed; //Залишилось

  


  return (
    <div className={styles.container}>
      <div className={styles.summery}>
        <h1 className={styles.header}>
          Звіт на <span>{new Date().toLocaleDateString().replace(/\./g, '/')}</span>
        </h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.text}>Залишилось</p>
            <span className={styles.text}>
              {left && userData?.notAllowedProducts?.length ? `${left.toFixed(0)} ккал` : '0 ккал'}
            </span>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Спожито</p>
            <span className={styles.text}>
              {consumed && userData?.notAllowedProducts?.length ? `${consumed.toFixed(0)} ккал` : '0 ккал'}
            </span>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Добова норма</p>
            <span className={styles.text}>
              {dailyNorm && userData?.notAllowedProducts?.length ? `${dailyNorm} ккал` : '0 ккал'}
            </span>
          </li>
          <li className={styles.item}>
            <p className={styles.last__text}>% від норми</p>
            <span className={styles.text}>
              {percentOfNormal && userData?.notAllowedProducts?.length ? `${percentOfNormal.toFixed(0)} %` : '0 %'}
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.norecommended}>
        <h2 className={styles.header}>Не рекомендована їжа</h2>
        <ul >
          {userData?.notAllowedProducts?.length ? (
            userData.notAllowedProducts.slice(0, 9).map(({ _id, title }) => (
              <li key={_id} className={styles.text_item }>
                <span>{title.ua}</span>
              </li>
            ))
          ) : (
            <p className={styles.text}>Тут відображатиметься ваша дієта</p>
          )}
        </ul>
      </div>
    </div>
  );
}
