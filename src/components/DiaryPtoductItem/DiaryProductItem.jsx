import PropTypes from 'prop-types';
import s from './DiaryProductItem.module.scss';

const DiaryProductItem = ({ name, number, calory, onClick }) => (
  <li className={s.item}>
    <p className={s.text}>
      {/* Продукт */}
      {name}
    </p>
    <p className={s.text}>
      {number}
      {/* 200 */}
    <span className={s.size}>г</span>
    </p>
    <p className={s.text}>
      {calory}
      {/* 560 */}
    <span className={s.size}>ккал</span>
    </p>
    <button type="button" className={s.button} onClick={onClick}>
      &#10006;
    </button>
  </li>
);
DiaryProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  calory: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};


export default DiaryProductItem;
