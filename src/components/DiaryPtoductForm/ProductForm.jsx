import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { addProduct } from '../../redux/products/products-operations';
import { getProducts } from '../../redux/products/products-selectors';
import PropTypes from 'prop-types';
import s from './ProductForm.module.scss';
import {useForm} from 'react-hook-form'
import {getProductsSearch} from '..//..//js/backendAPI'


function ProductForm({onSubmit, visibleForm }) {
  const products = useSelector(getProducts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  getProductsSearch('гр')
  const{
    register,
    handleSubmit,
    formState: {errors}
  } =useForm()

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

    if(products.some(product => product.name === name)) {
      return alert(`${name} вже є у вашому списку`)
    }
    onSubmit({ name, number });
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  return (
    <div className={s.block}>
      {visibleForm && 
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
          />
          {errors  && <span className={s.messageName}>{ errors.name?.message}</span>}
        </label>
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
      </form> }
    </div>
  );
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addProduct(text)),
});

export default connect(null, mapDispatchToProps)(ProductForm);