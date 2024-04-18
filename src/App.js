import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/Routes.js';
import Hotjar from '@hotjar/browser'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {

  useEffect(() => {
    Hotjar.init(process.env.REACT_APP_HOTJAR_ID, process.env.REACT_APP_HOTJAR_SNIPPET_VERSION,
      {
        debug: true
      });
  }, []);

  const { t, i18n } = useTranslation()

  return (
    <BrowserRouter>
      <div className={`${i18n.language === 'kz' ? 'kz' : 'ru'}`}>
        <AppRoutes />
        <ScrollToTop />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
