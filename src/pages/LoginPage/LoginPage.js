import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LoginPage.module.scss';



export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={styles.title}>Вхід</h1>

      <form onSubmit={handleSubmit}  className={styles.form} autoComplete="off">
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
          <li className={styles.item}><button type="submit" className={styles.button}>Вхід</button></li>
          <li className={styles.item}><button type="button" className={styles.button}>Реєстрація</button></li>           
        </ul>
        
      </form>
    </div>
  );
}