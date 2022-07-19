
// import PropTypes from 'prop-types';
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


// DiaryProductList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string,
//       calory: PropTypes.string,
//     })
//   ),
// };

