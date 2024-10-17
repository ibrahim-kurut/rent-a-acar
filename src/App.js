import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Cars from './pages/Cars';
import Rents from './pages/Rents';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarDetails from './pages/CarDetails';
import RentCar from './pages/RentCar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Register from './pages/Register';
import AdminPage from './pages/AdminPage';
import { useSelector } from 'react-redux';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <Router>
        <ToastContainer position="top-right" theme="colored" />
        <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white min-h-screen'}>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          {/* Using Main Routes sub-component */}
          <MainRoutes />
        </div>
      </Router>
    </Provider>
  );
};

// A sub -component to deal with links
const MainRoutes = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/rents/:id" element={<Rents />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={user?.is_admin ? <AdminPage /> : <Navigate to="/" />} />
      <Route path="/car_details/:id" element={<CarDetails />} />
      <Route path="/rent-car/:id" element={<RentCar />} />
    </Routes>
  );
};

export default App;
