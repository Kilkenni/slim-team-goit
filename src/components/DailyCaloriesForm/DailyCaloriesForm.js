import React, { Fragment } from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button/index';
import styles from './DailyCaloriesForm.module.scss';
import Modal from '../Modal';
import DailyCalorieIntake from '../DailyCalorieIntake';
import { getPublicData } from '..//../js/backendAPI';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import { setPrivatUserData } from '..//../js/backendAPI';

import * as yup from 'yup';

const schema = yup.object().shape({
  height: yup
    .number('Значення має бути число')
    .typeError('Введіть числове значення')
    .min(100, 'Вкажіть значення більше 100')
    .max(250, 'Вкажіть значення до 250')
    .integer('Значення має бути ціле число')
    .required("Обов'язкове поле"),
  age: yup
    .number('Значення має бути число')
    .typeError('Введіть числове значення')
    .min(18, 'Вкажіть значення більше 18')
    .max(100, 'Вкажіть значення до 100')
    .integer('Значення має бути ціле число')
    .required("Обов'язкове поле"),
  currentWeight: yup
    .number('Значення має бути число')
    .typeError('Введіть числове значення')
    .min(20, 'Вкажіть значення більше 20')
    .max(500, 'Вкажіть значення до 500')
    .integer('Значення має бути ціле число')
    .required("Обов'язкове поле"),
  desiredWeight: yup
    .number('Значення має бути число')
    .typeError('Введіть числове значення')
    .min(20, 'Вкажіть значення більше 20')
    .max(500, 'Вкажіть значення до 500')
    .integer('Значення має бути ціле число')
    .required("Обов'язкове поле"),
});

function DailyCaloriesForm({ onSumbForm }) {
  const [list, setList] = useState();
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const submitForm = (values, { resetForm }) => {
    if (!isLoggedIn) {
      getPublicData(values).then(setList);
      toggleModal();
    } else {
      setPrivatUserData(values).then(response => {
        return response;
      });
    }
    resetForm({ values: '' });
    onSumbForm(values);
  };

  return (
    <Fragment>
      {showModal && list && (
        <Modal onClose={toggleModal}>
          <DailyCalorieIntake foodsList={list} onClose={toggleModal} />
        </Modal>
      )}
      <Formik
        initialValues={{
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: '1',
        }}
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
                  placeholder="Зріст *"
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
                  type="currentWeight"
                  name="currentWeight"
                  placeholder="Вага *"
                  className={
                    errors.CurrentW && touched.CurrentW
                      ? styles['input-error']
                      : styles['calculate__field']
                  }
                />
                <ErrorMessage
                  name="currentWeight"
                  component="div"
                  className={styles['subtitle-error']}
                />
              </div>
              <div className={styles['field__wrapper']}>
                <Field
                  type="desiredWeight"
                  name="desiredWeight"
                  placeholder="Бажана вага *"
                  className={
                    errors.DesiredW && touched.DesiredW
                      ? styles['input-error']
                      : styles['calculate__field']
                  }
                />
                <ErrorMessage
                  name="desiredWeight"
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
                      name="bloodType"
                      value="1"
                      className={styles['radioItem']}
                      checked
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                  <label>
                    II
                    <Field
                      type="radio"
                      name="bloodType"
                      value="2"
                      className={styles['radioItem']}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                  <label>
                    III
                    <Field
                      type="radio"
                      name="bloodType"
                      value="3"
                      className={styles['radioItem']}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                  <label>
                    IV
                    <Field
                      type="radio"
                      name="bloodType"
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
                disabled={!(dirty && isValid && values.bloodType)}
                className={
                  !(dirty && isValid && values.bloodType) ? 'disabled-btn' : ''
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
