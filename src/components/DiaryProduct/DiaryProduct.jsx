import DiaryProductForm from '../DiaryProductForm';
import s from './DiaryProduct.module.scss';

const DiaryProduct = ({ setItem, date }) => {
  return (
    <div className={s.block}>
      <DiaryProductForm onSubmit={setItem} date={date} />
    </div>
  );
};

export default DiaryProduct;
