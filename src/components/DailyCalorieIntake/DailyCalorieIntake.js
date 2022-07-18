import React from 'react';
import Button from '../Button/index';
import styles from './DailyCalorieIntake.module.scss';
import { useNavigate } from 'react-router-dom';

  function DailyCalorieIntake({ foodsList, onClose }) {
  let navigate = useNavigate();

  const handleClick = () => {
    onClose();
    navigate('/register', { replace: true });
  };
  return (
    <div className={styles['modal-content']}>
      <div className={styles['modal-content__inner']}>
        <h2 className={styles['modal-content__title']}>
          Рекомендоване денне споживання поживних речовин в калоріях становить
        </h2>
        <p className={styles['modal-content__calories']}>
          {foodsList.calories} <span>ккал</span>
        </p>
      </div>
      <div className={styles['modal-content__inner']}>
        <h3 className={styles['modal-content__subtitle']}>
          Продукти, які ви не повинні їсти
        </h3>
        <ol className={styles['modal-content__list']}>
        {foodsList.notAllowedProducts.map(({ _id, title}) => (
          <li key={_id} className={styles['modal-content__item']}>
            <p className={styles['modal-content__text']}>{title.ua}</p>
          </li>
        ))}
        </ol>
      </div>
      <Button
        id={'button-modal'}
        type={'button'}
        title={'Почніть худнути'}
        onClose={handleClick}
      />
    </div>
  );
}

export default DailyCalorieIntake;
