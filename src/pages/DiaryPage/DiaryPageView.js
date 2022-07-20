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
  const [item, setItem] = useState(null);
  const [products, setProducts] = useState(null);

  // const dateCurrent = date.toLocaleDateString();

  useEffect(() => {
    getDiaryByDate(date).then(data => {
      setProducts(data);
    });
  }, [date, item]);

  const deleteProduct = async (id, date) => {
    const response = await deleteProductById(id, date);
    if (response.code === 200) {
      setProducts(products.filter(product => product._id !== id));
    }
  };

  return (
    <Container date={date}>
      <LeftSideBar>
        <DiaryDateСalendar onChangeDate={setDate} date={date} />
        <DiaryProduct setItem={setItem} date={date} />
        <DiaryProductList
          products={products}
          date={date}
          onDeleteItem={deleteProduct}
        />
      </LeftSideBar>
      <RightSideBar date={date} diaryProducts={products} />
    </Container>
  );
}
