import s from './DiaryProductItem.module.scss';

const DiaryProductItem = () => (
  <li className={s.item}>
    <p className={s.text}>
      Продукт
    </p>
    <p className={s.text}>
      200
    <span className={s.size}>г</span>
    </p>
    <p className={s.text}>
      560
    <span className={s.size}>ккал</span>
    </p>
    <button type="button" className={s.button} >
      &#10006;
    </button>
  </li>
);

export default DiaryProductItem;
