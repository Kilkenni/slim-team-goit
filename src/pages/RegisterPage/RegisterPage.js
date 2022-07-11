import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegisterPage.module.scss';



export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();    
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={styles.title}>Реєстрація</h1>

      <form onSubmit={handleSubmit}  className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Ім'я*
          <input className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <label className={styles.label}>
          Пошта*
          <input className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <label className={styles.label}>
          Пароль*
          <input className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <ul className={styles.list}>
          <li className={styles.item}><a href='./login'><button type="button"  className={styles.button}>Вхід</button></a></li>
          <li className={styles.item}><button type="submit" className={styles.button}>Реєстрація</button></li>           
        </ul>       
      </form>
    </div>
  );
}