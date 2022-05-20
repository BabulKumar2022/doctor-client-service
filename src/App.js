import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';
import Review from './Pages/Review/Review';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/About/About';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequierAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';

function App() {

  return (
    <div className="max-w-7x1 px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/appointment' element={
        <RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}>
        </Route>
        <Route path='/dashboard' element={
        <RequireAuth>
         <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="myReview" element={<MyReview></MyReview>}></Route>
          <Route path="myHistory" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctors" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
