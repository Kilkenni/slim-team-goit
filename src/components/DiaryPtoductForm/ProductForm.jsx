import React, { useState } from 'react';
import s from './ProductForm.module.scss';
import {useForm} from 'react-hook-form'

function ProductForm({ visibleForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
  const onSubmit = (e) => {
    // e.preventDefault()
    
  }
  return (
    <div className={`${s.block} `}>
      {visibleForm && 
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
          {errors  && <span>{ errors.name?.message}</span>}
        </label>
        <label className={s.gram}>
          <input
            type="number"
            name="number"
            className={s.inputGram}
            value={number}
            onChange={handleInputChange}
            placeholder="Грами"
          />
        </label>
        <button type='submit' className={s.button}>
          <p className={s.add}>Додати</p>
          <span className={s.plus}>+</span>
        </button>
      </form> }
    </div>
  );
}

export default ProductForm;