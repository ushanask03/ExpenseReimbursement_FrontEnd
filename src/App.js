import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NavbarReimbursement from './components/NavbarReimbursement';
import ReimbursementEmployeepage from './pages/ReimbursementEmployeepage'
import ReimbursementManagerpage from './pages/ReimbursementManagerpage';
import AddReimbursementpage from './pages/AddReimbursementpage'
import Homepage from './pages/Homepage';
import LoginEmployeepage from './pages/LoginEmployeepage';
import LoginManagerpage from './pages/LoginManagerpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/employee" element={<LoginEmployeepage/>} />
      <Route path="/manager" element={<LoginManagerpage/>} />
      <Route path="/reimburseemp" element={<ReimbursementEmployeepage/>} />
      <Route path="/reimbursemang" element={<ReimbursementManagerpage/>} />
      <Route path="/addreimburse" element={<AddReimbursementpage/>} />
      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
