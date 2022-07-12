import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>      
        <BrowserRouter>
           <App />  
        </BrowserRouter> 
      </PersistGate>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();