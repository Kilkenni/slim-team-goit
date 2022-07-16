import React from "react";
import DiaryProductItem from '../DiaryPtoductItem/DiaryProductItem';
import s from './DiaryProductList.module.scss';

const DiaryProductList = ({setVisibleForm, setVisibleList}) => {

  const handleChange = () => {
    setVisibleForm(true)
    setVisibleList(false)
  }

  return (
    
    <div className={s.block}>

      <ul className={s.list}>
          <DiaryProductItem />
      </ul>
      <button onClick={handleChange} className={s.button}>
        <span className={s.plus}>+</span>
      </button>
    </div>
  );
};

export default DiaryProductList;