import Container from "../../components/Container";
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';



const CalculatorPage = () => {
  return (
    <Container>
    <LeftSideBar>
        <DailyCaloriesForm />
    </LeftSideBar>
    <RightSideBar/>
</Container>
  
  );
};

export default CalculatorPage;