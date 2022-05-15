import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import AppointmentPage from './Pages/AppointmentPage/AppointmentPage/AppointmentPage';
import Register from './Pages/shared/Register/Register';
import RequireAuth from './Pages/shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="">

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appoinment" element={
          <RequireAuth>
            <AppointmentPage />
          </RequireAuth>
        } />

      </Routes>
    </div>
  );
}

export default App;
