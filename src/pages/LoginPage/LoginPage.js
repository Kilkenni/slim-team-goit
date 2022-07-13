import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LoginPage.module.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
 
const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().min(5).required(),
});

const initialValues = {
  email: '',
  password: '',  
}

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = ({email,password}, {resetForm}) => {     

     setEmail(email);
     setPassword(password);  
     dispatch(authOperations.logIn({ email, password }));
   
    resetForm({email:"",password:""});
  };

  return (
    <div>
      <h1 className={styles.title}>Вхід</h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        <Form  className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Пошта*
          <Field className={styles.input}
            type="email"
            name="email"
            autoComplete="off"
            required
            />
            <ErrorMessage name="email" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Пароль*
          <Field className={styles.input}
            type="password"
            name="password"       
            autoComplete="off"
            required
            />
            <ErrorMessage name="password" component="div" className={styles.error} />
        </label>
        <ul className={styles.list}>
          <li className={styles.item}><button type="submit" className={styles.button}>Вхід</button></li>
          <li className={styles.item}><a href='./register'><button type="button" className={styles.button}>Реєстрація</button></a></li>           
        </ul>        
      </Form>
      </Formik>
      
    </div>
  );
}