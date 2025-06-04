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
import BookingForm from './Pages/BookingForm';
import { BookingProvider } from './Context/BookingContext';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import { AuthContext, AuthProvider } from './Context/AuthContext';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';
import Contactus from './Pages/Contactus';
import ChangePassword from './Pages/ChangePassword';

function App() {
  return (
    <AuthProvider>

    <div className="App">
      <BookingProvider>
        <ScrollToTop />

      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Rooms />} path='/rooms' />
        <Route element={<MyBooking />} path='/mybooking' />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
        <Route element={<RoomDetails />} path='/roomDetails/:roomId' />
        <Route element={<BookingForm />} path='/bookingform/:roomId' />
        <Route element={<Settings />} path='/settings' />
        <Route element={<Profile />} path='/profile' />
        <Route element={<Contactus />} path='/contactus' />
        <Route element={<ChangePassword />} path='/changePassword' />

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
      </BookingProvider>
    </div>
    </AuthProvider>
  );
}

export default App;
