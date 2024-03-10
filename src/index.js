import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './i18n'
import { Provider } from 'react-redux'
import store from './store';
import useAuth from './hoc/useAuth'

const AuthProvider = () => {
  useAuth()
  return <App />
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
