import { Fragment, useState, useEffect } from 'react';

import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import styles from './CalculatorPage.module.scss';
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import { getCurrentUser, updateCurrentUser } from '../../js/backendAPI';

const CalculatorPage = () => {
  const [date] = useState(new Date());
  const [userParams, setUserParams] = useState(null);
  const [userProducts, setUserProducts] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    //do once
    async function getUserFromBd() {
      // setIsFetching(true);
      const response = await getCurrentUser();
      const { height, age, currentWeight, desiredWeight } = response.parameters;
      if (
        height !== '0' &&
        age !== '0' &&
        currentWeight !== '0' &&
        desiredWeight !== '0'
      ) {
        //check if those are correct data
        setUserParams(response.parameters);
      }
      setUserProducts(response.notAllowedProducts);
      setIsFetching(false);
    }
    getUserFromBd();
  }, []);

  const updateUser = async values => {
    const response = await updateCurrentUser(values); //відправляємо дані користувача на бек
    setUserParams(response.parameters);
    setUserProducts(response.notAllowedProducts);
  };

  return (
    <Fragment>
      {isFetching ? (
        <Loader />
      ) : (
        <Container>
          <div className={styles.container_calculator}>
            <h1 className={styles.container__title}>
              Розрахуйте добову норму калорій прийом прямо зараз
            </h1>
            <DailyCaloriesForm onFormSubmit={updateUser} {...userParams} />
          </div>
          <RightSideBar
            date={date}
            userParams={userParams}
            userProducts={userProducts}
          />
        </Container>
      )}
    </Fragment>
  );
};

export default CalculatorPage;
