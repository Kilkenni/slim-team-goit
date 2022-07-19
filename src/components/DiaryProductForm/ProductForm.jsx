import React, { useState, useEffect, useCallback } from 'react';
// import { connect, useSelector } from 'react-redux';
// import { addProduct } from '../../redux/products/products-operations';
// import { getProducts } from '../../redux/products/products-selectors';
// import PropTypes from 'prop-types';
import s from './ProductForm.module.scss';
import {useForm} from 'react-hook-form'
import {getProductsSearch, addProductInDiary} from '..//..//js/backendAPI'
// import { getByTitle } from '@testing-library/react';
import debounce from 'lodash/debounce';

// function ProductForm({onSubmit, visibleForm }) {
  function ProductForm({onSubmit, date}) {
  // const products = useSelector(getProducts);
  const [list, setList] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const{
    register,
    handleSubmit,
    formState: {errors}
  } =useForm()

  const updateQuery = () => {if(name){
    getProductsSearch(name).then(setList)
  } return};

  //eslint-disable-next-line
  const delayedQuery = useCallback(debounce(updateQuery, 500), [name]);

  useEffect(() => {
    delayedQuery();
    return delayedQuery.cancel;
  }, [name, delayedQuery]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onHandleSubmit = () => {
    // e.preventDefault();
    // if(delayedQuery.some(product => product.title.ua === name)) {
    //   return alert(`${name} вже є у вашому списку`)
    // }
    
    addProductInDiary({ title: name, weight: number, date }).then(onSubmit)
    // onSubmit({ title: name, weight: number, date: dateCurrent });
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  }


  return (
    <div className={s.block}>
      <form onSubmit={handleSubmit(onHandleSubmit)} className={s.form}>
        <label className={s.name}>
          <input
            {...register('name', {
              required:'Введіть більше 2 символів'
            })}
            type="text"
            name="name"
            className={s.inputName}
            value={name}
            onChange={handleInputChange}
            placeholder="Введіть назву продукту"
            list="list"
          />
          {errors  && <span className={s.messageName}>{ errors.name?.message}</span>}
        </label>
        {list && <datalist id="list">
        {list.map(({ _id, title}) => (
          <option key={_id} value={title.ua}/>
        ))}</datalist>}


        <label className={s.gram}>
          <input
            {...register('number', {
              required:'Поле має бути заповнене'
            })}
            type="number"
            name="number"
            className={s.inputGram}
            value={number}
            onChange={handleInputChange}
            placeholder="Грами"
          />
          {errors  && <span className={s.messageNumber}>{ errors.number?.message}</span>}
        </label>
        <button type='submit' className={s.button}>
          <p className={s.add}>Додати</p>
          <span className={s.plus}>+</span>
        </button>
      </form> 
    </div>
  );


  // return (
  //   <div className={s.block}>
  //     {visibleForm && 
  //     <form onSubmit={handleSubmit(onHandleSubmit)} className={s.form}>
  //       <label className={s.name}>
  //         <input
  //           {...register('name', {
  //             required:'Введіть більше 2 символів'
  //           })}
  //           type="text"
  //           name="name"
  //           className={s.inputName}
  //           value={name}
  //           onChange={handleInputChange}
  //           placeholder="Введіть назву продукту"
  //           list="list"
  //         />
  //         {errors  && <span className={s.messageName}>{ errors.name?.message}</span>}
  //       </label>
  //       {list && <datalist id="list">
  //       {list.map(({ _id, title}) => (
  //         <option key={_id} value={title.ua}/>
  //       ))}</datalist>}


  //       <label className={s.gram}>
  //         <input
  //           {...register('number', {
  //             required:'Поле має бути заповнене'
  //           })}
  //           type="number"
  //           name="number"
  //           className={s.inputGram}
  //           value={number}
  //           onChange={handleInputChange}
  //           placeholder="Грами"
  //         />
  //         {errors  && <span className={s.messageNumber}>{ errors.number?.message}</span>}
  //       </label>
  //       <button type='submit' className={s.button}>
  //         <p className={s.add}>Додати</p>
  //         <span className={s.plus}>+</span>
  //       </button>
  //     </form> }
  //   </div>
  // );
}

// ProductForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => ({
//   onSubmit: text => dispatch(addProduct(text)),
// });

// export default connect(null, mapDispatchToProps)(ProductForm);

export default ProductForm