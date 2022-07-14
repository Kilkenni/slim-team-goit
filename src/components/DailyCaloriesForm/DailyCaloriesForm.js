import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button/index';
import styles from './DailyCaloriesForm.module.scss';
import Modal from '../Modal';
import DailyCalorieIntake from '../DailyCalorieIntake';

import * as yup from 'yup';

const schema = yup.object().shape({
  height: yup
    .number()
    .min(100, 'Вкажіть значення більше 100')
    .max(250, 'Вкажіть значення до 250')
    .integer()
    .required("Обов'язкове поле"),
  age: yup
    .number()
    .min(16, 'Вкажіть значення більше 16')
    .max(100, 'Вкажіть значення до 100')
    .integer()
    .required("Обов'язкове поле"),
  CurrentW: yup
    .number()
    .min(20, 'Вкажіть значення більше 20')
    .max(500, 'Вкажіть значення до 500')
    .integer()
    .required("Обов'язкове поле"),
  DesiredW: yup
    .number()
    .min(20, 'Вкажіть значення більше 20')
    .max(500, 'Вкажіть значення до 500')
    .integer()
    .required("Обов'язкове поле"),
});

function DailyCaloriesForm() {
  const [blood, setBlood] = useState(null);
  const [calc, setCalc] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const foodsList = ['Flour products', 'Milk', 'Red meat', 'Smoked meats'];

  useEffect(() => {
    console.log(calc);
    console.log(blood);
  }, [blood]);

  const submitForm = (values, { resetForm }) => {
    const { height, age, CurrentW, DesiredW, Blood } = values;
    const value =
      10 * CurrentW +
      6.25 * height -
      5 * age -
      161 -
      10 * (CurrentW - DesiredW);
    setCalc(parseInt(value));
    setBlood(Blood);
    resetForm({ values: '' });
    toggleModal();
  };

  return (
    <Fragment>
      {showModal && (
        <Modal onClose={toggleModal}>
          <DailyCalorieIntake
            calories={calc}
            foodsList={foodsList}
            onClose={toggleModal}
          />
        </Modal>
      )}
      <Formik
        initialValues={{ height: '', age: '', CurrentW: '', DesiredW: '' }}
        validationSchema={schema}
        validateOnChange={true}
        validateOnBlur={false}
        onSubmit={submitForm}
      >
        {formik => {
          const { values, handleSubmit, errors, touched, isValid, dirty } =
            formik;
          return (
            <Form className={styles['calculate__form']} onSubmit={handleSubmit}>
              <div className={styles['field__wrapper']}>
                <Field
                  type="height"
                  name="height"
                  placeholder="Ріст *"
                  className={
                    errors.height && touched.height
                      ? styles['input-error']
                      : styles['calculate__field']
                  }
                />
                <ErrorMessage
                  name="height"
                  component="div"
                  className={styles['subtitle-error']}
                />
              </div>
              <div className={styles['field__wrapper']}>
                <Field
                  type="age"
                  name="age"
                  placeholder="Вік *"
                  className={
                    errors.age && touched.age
                      ? styles['input-error']
                      : styles['calculate__field']
                  }
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className={styles['subtitle-error']}
                />
              </div>
              <div className={styles['field__wrapper']}>
                <Field
                  type="CurrentW"
                  name="CurrentW"
                  placeholder="Вага *"
                  className={
                    errors.CurrentW && touched.CurrentW
                      ? styles['input-error']
                      : styles['calculate__field']
                  }
                />
                <ErrorMessage
                  name="CurrentW"
                  component="div"
                  className={styles['subtitle-error']}
                />
              </div>
              <div className={styles['field__wrapper']}>
                <Field
                  type="DesiredW"
                  name="DesiredW"
                  placeholder="Цільова вага *"
                  className={
                    errors.DesiredW && touched.DesiredW
                      ? styles['input-error']
                      : styles['calculate__field']
                  }
                />
                <ErrorMessage
                  name="DesiredW"
                  component="div"
                  className={styles['subtitle-error']}
                />
              </div>

              <div className={styles['radio__wrapper']}>
                <div id={styles['blood-group']}>Група крові *</div>
                <div
                  role="group"
                  aria-labelledby="blood-group"
                  className={styles['radio']}
                >
                  <label>
                    I
                    <Field
                      type="radio"
                      name="Blood"
                      value="1"
                      className={styles['radioItem']}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                  <label>
                    II
                    <Field
                      type="radio"
                      name="Blood"
                      value="2"
                      className={styles['radioItem']}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                  <label>
                    III
                    <Field
                      type="radio"
                      name="Blood"
                      value="3"
                      className={styles['radioItem']}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                  <label>
                    IV
                    <Field
                      type="radio"
                      name="Blood"
                      value="4"
                      className={styles['radioItem']}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                </div>
              </div>

              <Button
                id={'button-form'}
                type="submit"
                disabled={!(dirty && isValid && values.Blood)}
                className={
                  !(dirty && isValid && values.Blood) ? 'disabled-btn' : ''
                }
                title={'Почніть худнути'}
              />
            </Form>
          );
        }}
      </Formik>
    </Fragment>
  );
}

export default DailyCaloriesForm;
