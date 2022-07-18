import { useState, useEffect } from 'react';
import styles from './RightSideBar.module.scss';
import { getCurrentUser, getProductsOfDay } from '../../js/backendAPI';

export default function RightSideBar({ date, userParams, userProducts }) {
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState(null);
  
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
    async function fetchProductsOfDay(date) {
        if (date) {
        
            const productsAll = getProductsOfDay(date);
            setProducts(productsAll)
        } 
    }
    fetchProductsOfDay()
}, [date]);

const dailyRate = () => {
    if (userData?.parameters?.calories){
        return userData.parameters.calories
    }
}

const totalCalloriesOfDay= () => {      
    let total = 0;
    
    if(products){
    for (const product of products) {
        return total += product.calories;
      }} else return 0;
    }

    
    const dailyNorma = dailyRate() //Добова норма 
    const consumed = totalCalloriesOfDay() //Спожито   
    const procentOfNormal = ((consumed / dailyNorma)*100);  //n% від норми
    const left = dailyNorma - consumed; //Залишилось
    
    

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
            <span className={styles.text}>
            {userData?.parameters?.calories
                ? `${left} ккал`
                : 'невідомо'}
                </span>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Спожито</p>
            <span className={styles.text}>
                {userData?.parameters?.calories
                ? `${consumed} ккал`
                : 'невідомо'}
                </span>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Добова норма</p>
            <span className={styles.text}>
              {userData?.parameters?.calories
                ? `${dailyNorma} ккал`
                : 'невідомо'}
            </span>
          </li>
          <li className={styles.item}>
            <p className={styles.last__text}>n% від норми</p>
            <span className={styles.text}>
            {userData?.parameters?.calories
                ? `${procentOfNormal} %`
                : 'невідомо'}</span>
          </li>
        </ul>
      </div>
      <div className={styles.norecommended}>
        <h2 className={styles.header}>Не рекомендована їжа</h2>
        <ol className={styles.list}>
        { userData
        ? (userData.notAllowedProducts.slice(0, 8).map(({ _id, title}) => (
          <li key={_id} className={styles.item}>
            <p className={styles.text}>{title.ua}</p> 
          </li>
        )))
        : <p className={styles.text}>Тут відображатиметься ваша дієта</p>}
        </ol>
      </div>
    </div>
  );
}
