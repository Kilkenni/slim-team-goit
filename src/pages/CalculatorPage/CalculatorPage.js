import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import styles from './CalculatorPage.module.scss';

import { useState } from 'react';
import Container from '../../components/Container';
import { updateCurrentUser } from '../../js/backendAPI';

const CalculatorPage = () => {
  const [date] = useState(new Date());
  const [userParams, setUserParams] = useState(null);
  const [userProducts, setUserProducts] = useState(null);
  const handleFormSubmit = values => {
    async function updateUser() {
      console.log(values);
      const response = await updateCurrentUser(values); //відправляємо дані користувача на бек
      setUserParams(response.parameters);
      setUserProducts(response.notAllowedProducts);
    }
    updateUser();
  };
  return (
    <Container>
      <div className={styles.container_calculator}>
        <h1 className={styles.container__title}>
          Розрахуйте добову норму калорій прийом прямо зараз
        </h1>
        <DailyCaloriesForm onSumbForm={handleFormSubmit} />
      </div>
      <RightSideBar
        date={date}
        userParams={userParams}
        userProducts={userProducts}
      />
    </Container>
  );
};

export default CalculatorPage;
