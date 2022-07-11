import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';



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
      <h1 >Login page</h1>

      <form onSubmit={handleSubmit}   autoComplete="off">
        <label >
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <label >
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}