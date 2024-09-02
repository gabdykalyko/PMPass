import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Quests from "../pages/Quests/Quests";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import ShopQuests from "../pages/Welcome/ShopQuests/ShopQuests";
import Welcome from "../pages/Welcome/Welcome";
import Help from "../pages/Help/Help";
import FAQ from "../pages/FAQ/FAQ";
import Tournaments from '../pages/Tournaments/Tournaments';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/quests" element={<Quests />} />
    <Route path="/tournaments" element={<Tournaments />} />
    <Route path="/help" element={<Help />} />
    <Route path="/faq" element={<FAQ />} />
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      }
    />
    <Route
      path="/settings"
      element={
        <PrivateRoute>
          <Settings />
        </PrivateRoute>
      }
    />
    <Route
      path="/welcome"
      element={
       
          <Welcome />
        
      }
    />
  </Routes>
);

export default AppRoutes;
