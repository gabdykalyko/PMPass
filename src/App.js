import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/Routes.js';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ScrollToTop />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
