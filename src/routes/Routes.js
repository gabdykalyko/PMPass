import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Quests from '../pages/Quests/Quests';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings';
import ShopQuests from '../pages/Welcome/ShopQuests/ShopQuests';
import Welcome from '../pages/Welcome/Welcome';
import Help from '../pages/Help/Help';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/quests" element={<Quests />} />
    <Route path="/help" element={<Help />} />
    <Route path="/profile"
      element={<PrivateRoute>
        <Profile />
      </PrivateRoute>} />
    <Route path="/settings"
      element={<PrivateRoute>
        <Settings />
      </PrivateRoute>} />
    <Route path="/welcome"
      element={<PrivateRoute>
        <Welcome />
      </PrivateRoute>} />
  </Routes>
)

export default AppRoutes