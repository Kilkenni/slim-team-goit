import React from "react";
import DiaryProductItem from '../DiaryPtoductItem/DiaryProductItem';
import s from './DiaryProductList.module.scss';

const DiaryProductList = () => {

  return (
    <div className={s.block}>
      <ul className={s.list}>
          <DiaryProductItem />
      </ul>
      <button className={s.button}>
        <span className={s.plus}>+</span>
      </button>
    </div>
  );
};

export default DiaryProductList;