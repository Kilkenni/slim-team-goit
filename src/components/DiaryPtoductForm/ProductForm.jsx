import React, { useState } from 'react';
import s from './ProductForm.module.scss';

function ProductForm({ onSubmit }) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  return (
    <div className={s.block}>
      <form className={s.form}>
        <label className={s.name}>
          <input
            type="text"
            name="name"
            className={s.inputName}
            required
            value={name}
            onChange={handleInputChange}
            placeholder="Введіть назву продукту"
          />
        </label>
        <label className={s.gram}>
          <input
            type="number"
            name="number"
            className={s.inputGram}
            required
            value={number}
            onChange={handleInputChange}
            placeholder="Грами"
          />
        </label>
        <button className={s.button}>
          <p className={s.add}>Додати</p>
          <span className={s.plus}>+</span>
        </button>
      </form>
    </div>
  );
}

export default ProductForm;