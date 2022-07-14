import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import styles from "./CalculatorPage.module.scss";


const CalculatorPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.container_calculator}>
    <h1 className={styles.container__title}>Розрахуйте добову норму калорій прийом прямо зараз</h1>
      <DailyCaloriesForm />
      </div>
      <RightSideBar/>
    </div>

  
  );
};

export default CalculatorPage;


