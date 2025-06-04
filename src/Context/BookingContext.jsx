import React, { createContext, useContext, useState } from "react";

export const BookingContext = createContext();
export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const addBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };
  const removeBooking =(id)=>{
    setBookings(prev=>prev.filter(p=>p.id!==id))

  }
  return (
    <BookingContext.Provider value={{ bookings,setBookings, addBooking ,removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
