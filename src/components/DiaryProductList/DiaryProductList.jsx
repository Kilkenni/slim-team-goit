import DiaryProductItem from '../DiaryProductItem/DiaryProductItem';
import s from './DiaryProductList.module.scss';

export default function DiaryProductList({ date, products, onDeleteItem }) {

  return (
    <div className={s.block}>
      <ul className={s.list}>
        {products?.map(({ _id, title, weight, calories }) => (
          <DiaryProductItem
            key={_id}
            id={_id}
            title={title}
            weight={weight}
            calories={calories}
            date={date}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

