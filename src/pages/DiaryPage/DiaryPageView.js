import Container from '../../components/Container';
import DiaryDateСalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';
import { useState, useEffect } from 'react';
import DiaryProduct from '../../components/DiaryProduct';
import DiaryProductList from '../../components/DiaryProductList';
import { getDiaryByDate, deleteProductById } from '..//../js/backendAPI';

export default function DiaryPageView() {
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState();
  const [products, setProducts] = useState();

  const dateCurrent = date.toLocaleDateString().replace(/\./g, '.');

  // useEffect(()=>{
  //     getProductsDiary(dateCurrent).then(setItems)
  // },[item])
  // getProductsDiary(dateCurrent).then(setItems)

  useEffect(() => {
    getDiaryByDate(date).then(data => {
      setProducts(data);
    });
  }, [date, item, products]);

  const deleteProduct = (id, date) => {
    const response = deleteProductById(id, date);
    if (response.code === 200) {
      setProducts(products.filter(product => product._id !== id));
    }
  };

  return (
    <Container date={date}>
      <LeftSideBar>
        <DiaryDateСalendar onChangeDate={setDate} date={date} />
        <DiaryProduct setItem={setItem} date={dateCurrent} />
        <DiaryProductList
          products={products}
          date={date}
          onDeleteItem={deleteProduct}
        />
      </LeftSideBar>
      <RightSideBar date={date} />
    </Container>
  );
}
