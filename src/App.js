import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Quests from './pages/Quests/Quests';
import PrivateRoute from './PrivateRoute';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/profile" element={<PrivateRoute>
                                        <Profile />
                                        </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
