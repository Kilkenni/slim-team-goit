import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import banana from "./images/banana.png";
import strawberry from "./images/strawberry.png";
import leaves from "./images/leaves.png";
import leavesTable from "./images/leaves-table.png";
import mainVector from "./images/main-vector.svg";

import * as yup from "yup";

const schema = yup.object().shape({
  height: yup.number().min(100, "Вкажіть значення більше 100").max(250, "Вкажіть значення до 250").integer().required("Обов'язкове поле"),
  age: yup.number().min(16, "Вкажіть значення більше 16").max(100, "Вкажіть значення до 100").integer().required("Обов'язкове поле"),
  CurrentW: yup.number().min(20, "Вкажіть значення більше 20").max(500, "Вкажіть значення до 500").integer().required("Обов'язкове поле"),
  DesiredW: yup.number().min(20, "Вкажіть значення більше 20").max(500, "Вкажіть значення до 500").integer().required("Обов'язкове поле"),
});



function MainPage() {
  const [calc, setCalc] = useState(null);

//   const submitForm =  ({ height, age, CurrentW, DesiredW,  }) => {
//     const value = 10 * CurrentW + 6.25 * height - 5 * age - 161 - 10 * (CurrentW - DesiredW);
//     console.log(value);
//   }
  const submitForm =  (values) => {
console.log(values)
  }


  return (
    <div className="main">
      <div className="main__content">
        <h1 className="main__title">Розрахуйте добову норму калорій прийом прямо зараз</h1>

        <Formik
          initialValues={{ height: "", age: "", CurrentW: "", DesiredW: "" }}
          validationSchema={schema}
          validateOnChange={true}
          validateOnBlur={false}
          onSubmit={submitForm}
        >
          {(formik) => {
            const { values, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
            return (
              <Form className="calculate__form" onSubmit={handleSubmit}>
                <Field type="height" name="height" placeholder="Ріст *" className={ errors.height && touched.height ? "input-error" : 'calculate__field' }/>
                <ErrorMessage name="height" component="div" className="subtitle-error"/>
                <Field type="age" name="age" placeholder="Вік *" className={ errors.age && touched.age ? "input-error" : 'calculate__field' } />
                <ErrorMessage name="age" component="div" className="subtitle-error"/>
                <Field type="CurrentW" name="CurrentW" placeholder="Вага *" className={ errors.CurrentW && touched.CurrentW ? "input-error" : 'calculate__field' } />
                <ErrorMessage name="CurrentW" component="div" className="subtitle-error"/>
                <Field type="DesiredW" name="DesiredW" placeholder="Цільова вага *" className={ errors.DesiredW && touched.DesiredW ? "input-error" : 'calculate__field' } />
                <ErrorMessage name="DesiredW" component="div" className="subtitle-error"/>

                <div id="blood-group">Група крові *</div>
                <div role="group" aria-labelledby="blood-group" className="radio">
                  <label>
                    I
                    <Field type="radio" name="Blood" value="1" className="radioItem" />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    II
                    <Field type="radio" name="Blood" value="2" className="radioItem" />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    III
                    <Field type="radio" name="Blood" value="3" className="radioItem" />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    IV
                    <Field type="radio" name="Blood" value="4" className="radioItem" />
                    <span className="checkmark"></span>
                  </label>
                </div>

                <button type="submit" disabled={!(dirty && isValid)} className={!(dirty && isValid) ? 'disabled-btn' : ''}
                >
                  Почніть худнути
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>

      <div className="main__img--wrapper">
        <img src={leavesTable} className="main__img leavesTable" alt="leaves" />
        <img src={leaves} className="main__img leaves" alt="leaves" />
        <img src={banana} className="main__img banana" alt="banana" />
        <img src={strawberry} className="main__img strawberry" alt="strawberry" />
        <img src={mainVector} className="main__img mainVector" alt="backround-vector" />
      </div>
    </div>
  );
}

export default MainPage;
