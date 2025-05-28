import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Rooms from './Pages/Rooms';
import Home from './Pages/Home'
import About from './Pages/About';
import MyBooking from './Pages/MyBooking';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RoomDetails from './Pages/RoomDetails';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Rooms />} path='/rooms' />
        <Route element={<MyBooking />} path='/mybooking' />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
        <Route element={<RoomDetails />} path='/roomDetails/:roomId' />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
