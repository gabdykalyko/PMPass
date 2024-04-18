import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/Routes.js';
import Hotjar from '@hotjar/browser'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Hotjar.init(process.env.REACT_APP_HOTJAR_ID, process.env.REACT_APP_HOTJAR_SNIPPET_VERSION,
      {
        debug: true
      });
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
      <ScrollToTop />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
