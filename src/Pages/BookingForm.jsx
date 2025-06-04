import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import rooms from '../Components/Assets/data/rooms.json';
import './Css/BookingForm.css';
import {BookingContext} from '../Context/BookingContext';

const BookingForm = () => {
  const [editedTime ,setEditedTime]=useState('')
  const {bookings ,addBooking}=useContext(BookingContext);
  const navigate =useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!selectedTime){
      alert('please choice your time')
      return ;
    }
    const newBooking ={
      id:Date.now(),
      room :room.name,
      date: new Date().toISOString().split('T')[0],
      time :selectedTime
    }
     addBooking(newBooking)
     alert(`Room "${room.name}" booked at ${selectedTime}`);
     navigate('/mybooking');
  }
  const { roomId } = useParams();
  const room = rooms.find(room => room.id === Number(roomId));
  const [availableTimes, setAvailableTimes] = useState([]);
  console.log('room' ,room)
  // Simulate fetching from backend
useEffect(() => {
  if(room) {
    console.log(`roomid ${room.id}`);
  } else {
    console.log('room not found');
  }

  setTimeout(() => {
    setAvailableTimes([
      "9:00 AM - 11:00 AM",
      "12:00 PM - 2:00 PM",
      "3:00 PM - 5:00 PM"
    ]);
  }, 500);
}, [room]);

  const [selectedTime, setSelectedTime] = useState("");


  if (!room) {
    return <h2>Room not found</h2>;
  }

  return (
    <div className="booking-form">
      <h1>Book: {room.name}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="time">Select Time:</label>
        <select
  id="time"
  value={selectedTime}
  onChange={(e) => setSelectedTime(e.target.value)}
>
  <option value="">-- Choose a time --</option>
  {availableTimes.map((time, index) => (
    <option key={index} value={time}>
      {time}
    </option>
  ))}
</select>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
