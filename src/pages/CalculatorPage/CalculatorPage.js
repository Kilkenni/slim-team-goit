import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import styles from "./CalculatorPage.module.scss";
import Container from "../../components/Container";

const CalculatorPage = () => {
  return (
    <Container>
    <div className={styles.container_calculator}>
    <h1 className={styles.container__title}>Розрахуйте добову норму калорій прийом прямо зараз</h1>
      <DailyCaloriesForm />
      </div>
      <RightSideBar/>
    </Container>

  
  );
};

export default CalculatorPage;


