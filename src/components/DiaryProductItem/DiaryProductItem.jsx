import PropTypes from 'prop-types';
import s from './DiaryProductItem.module.scss';

function DiaryProductItem ({ title, weight, calories, id, date,onDeleteItem }) {

return (<li className={s.item}>
    <p className={s.text}>
      {/* Продукт */}
      {title}
    </p>
    <p className={s.text}>
      {weight}
      {/* 200 */}
      <span className={s.size}>г</span>
    </p>
    <p className={s.text}>
      {calories}
      {/* 560 */}
      <span className={s.size}>ккал</span>
    </p>
    <button type="button" className={s.button} onClick={() => onDeleteItem(id, date) }>
      &#10006;
    </button>
  </li>)

};
DiaryProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  weight: PropTypes.number,
  calories: PropTypes.number,
  id:PropTypes.string.isRequired,
};


export default DiaryProductItem;
