import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Quests from './pages/Quests/Quests';
import PrivateRoute from './PrivateRoute';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Start from './pages/Welcome/Start/Start';
import { ToastContainer } from 'react-toastify';
import ShopQuests from './pages/Welcome/ShopQuests/ShopQuests';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/profile"
               element={<PrivateRoute>
                          <Profile />
                        </PrivateRoute>} />
        <Route path="/settings"
               element={<PrivateRoute>
                          <Settings />
                        </PrivateRoute>} />
        <Route path="/start"
               element={<PrivateRoute>
                          <Start />
                        </PrivateRoute>} />
        <Route path="/showquests"
               element={<PrivateRoute>
                          <ShopQuests />
                        </PrivateRoute>} />
      </Routes>
      <ScrollToTop />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
