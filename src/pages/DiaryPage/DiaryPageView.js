import Container from '../../components/Container';
import DiaryDateСalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';
import { useState, useEffect } from 'react';
import DiaryProduct from '../../components/DiaryProduct';
import DiaryProductList from '../../components/DiaryPtoductList';
import { getProductsDiary } from '..//../js/backendAPI';

export default function DiaryPageView() {
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState();
  const [items, setItems] = useState();
  const dateCurrent = new Date(date).toLocaleDateString().replace(/\./g, '.');
  // useEffect(()=>{
  //     getProductsDiary(dateCurrent).then(setItems)
  // },[item])
  // getProductsDiary(dateCurrent).then(setItems)

  useEffect(() => {
    getProductsDiary(dateCurrent).then(response =>
      setItems(response.data.data.productList)
    );
  }, [dateCurrent, item]);
  console.log(items);
  return (
    <Container date={date}>
      <LeftSideBar>
        <DiaryDateСalendar onChangeDate={setDate} date={date} />
        <DiaryProduct setItem={setItem} date={dateCurrent} />
        <DiaryProductList newItem={items} />
      </LeftSideBar>
      <RightSideBar date={date} />
    </Container>
  );
}
