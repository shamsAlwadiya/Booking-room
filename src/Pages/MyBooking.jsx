import React, { useContext, useState } from "react";
import './Css/MyBooking.css'
import {BookingContext} from "../Context/BookingContext";
import { Link, useNavigate } from "react-router-dom";
const MyBooking=()=>{
  const navigate = useNavigate();

  const [editingId ,setEditingId]=useState(null);
  const [editDate ,setEditDate]=useState({date :"",time:""})
  const { bookings, setBookings } = useContext(BookingContext);
    const handleDelete = (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
      if (confirmDelete) {
       const updateBookings =bookings.filter((booking)=>booking.id !==id);
       setBookings(updateBookings);
      }
    };
  
    const handleEdit = (booking) => {
     setEditingId(booking.id)
     setEditDate({date:booking.date ,time:booking.time})
    };
  
    const handleSave = (id) => {
      const updateBookings = bookings.map((booking)=>{
        return booking.id ===id ? {...booking , ...editDate} : booking;
  
      });
      setBookings(updateBookings)
      setEditingId(null)
    };
    const handleAdd =()=>{
    navigate('/rooms');

    }
    const handleChange =(e)=>{
      setEditDate({ ...editDate ,[e.target.name]: e.target.value})
    }


  return (
    <div className="my-booking">
      <div className="header">
        <h2>My Bookings</h2>
        <Link to={'/rooms'}><button className="add-btn" onClick={handleAdd}>+ Add Booking</button></Link>
      </div>
      <table className="booking-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Room</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.room}</td>
              <td>{editingId ===booking.id ? (
                <input
                type="date"
                name="date"
                value={editDate.date}
                onChange={handleChange}
                />
              ):
              ( booking.date)
              }</td>
              <td>{editingId ===booking.id ?(
                <input
                type="time"
                name="time"
                value={editDate.time}
                onChange={handleChange}
                placeholder="e.g., 2:00 PM"
                />
              )
            :(
              booking.time
            )}</td>
              <td>
                {editingId===booking.id ?
                (
                  <button className="save-btn" onClick={()=>handleSave(booking.id)}>Save</button>
                ):
                (
                  <button className="edit-btn" onClick={() => handleEdit(booking)}>Edit</button>
                )
                }
                <button className="delete-btn" onClick={() => handleDelete(booking.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}
export default MyBooking;
