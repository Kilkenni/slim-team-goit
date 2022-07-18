import PropTypes from 'prop-types';
import { deleteProductById } from '..//../js/backendAPI';
import s from './DiaryProductItem.module.scss';

const DiaryProductItem = ({ title, weight, calories, id, date }) => (
  <li className={s.item}>
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
    <button type="button" className={s.button} onClick={() => { deleteProductById(id, {date: date}) }}>
      &#10006;
    </button>
  </li>
);
DiaryProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  weight: PropTypes.number,
  calories: PropTypes.number,
  id:PropTypes.string.isRequired,
};


export default DiaryProductItem;
