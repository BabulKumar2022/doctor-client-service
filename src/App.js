import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';
import Review from './Pages/Review/Review';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/About/About';

function App() {

  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
