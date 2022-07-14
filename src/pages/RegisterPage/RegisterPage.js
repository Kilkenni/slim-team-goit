import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegisterPage.module.scss';

import banana from "../../components/MainPage/images/banana.png";
import strawberry from "../../components/MainPage/images/strawberry.png";
import leaves from "../../components/MainPage/images/leaves-new.png";
import leavesTable from "../../components/MainPage/images/leaves-table-new.png";
import mainVector from "../../components/MainPage/images/main-vector.svg";
import '../../components/App.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().min(5).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',  
}

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = ({ name, email, password }, { resetForm }) => {  
    
      setName(name);
      setEmail(email);
      setPassword(password);  
      dispatch(authOperations.register({ name, email, password }));
    
      resetForm({name:"",email:"",password:""});
  };

  return (
    <div>
      <div className={styles.container}>
      <div className={styles.title__container}>
        <h1 className={styles.title}>Реєстрація</h1>
      </div>      
      
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        <Form  className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Ім'я*
          <Field className={styles.input}
            type="text"
            name="name"            
            autoComplete="off"
            required
            />
            <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

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
          <li className={styles.item}><a href='./login'><button type="button"  className={styles.btn}>Вхід</button></a></li>
          <li className={styles.item}><button type="submit" className={styles.btn__second}>Реєстрація</button></li>           
        </ul>       
      </Form>
      </Formik>
      
    </div>

    <div className="main__img--wrapper">
        <div className="leaf leaf-first"></div>
        <div className="leaf leaf-second"></div>
        <div className="leaf leaf-third"></div>
        <div className="leaf leaf-fourth"></div>

        <img src={leavesTable} className="main__img leavesTable" alt="leaves" />
        <img src={leaves} className="main__img leaves" alt="leaves" />
        <div id="banana">
        <img src={banana} className="main__img banana" alt="banana" />
        </div>
        <img src={strawberry} className="main__img strawberry" alt="strawberry" />
        <img src={mainVector} className="main__img mainVector" alt="backround-vector" />
      </div>
    </div>
    
  );
}