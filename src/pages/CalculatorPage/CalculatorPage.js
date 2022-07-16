import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import styles from "./CalculatorPage.module.scss";

import { useState } from "react";
import Container from "../../components/Container";


const CalculatorPage = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Container>
    <div className={styles.container_calculator}>
    <h1 className={styles.container__title}>Розрахуйте добову норму калорій прийом прямо зараз</h1>
      <DailyCaloriesForm />
      </div>
      <RightSideBar date={date}/>
    </Container>
  );
};

export default CalculatorPage;


