import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import { useState } from 'react'
import rooms from '../Components/Assets/data/rooms.json'
import './Css/RoomDetails.css'
import { FaArrowLeft } from 'react-icons/fa';
import Rooms from './Rooms'


const RoomDetails = () => {
  const [availableRoom , setAvailableRoom] = useState(rooms);
  const {roomId} = useParams();
  const room =rooms.find(room =>room.id===Number(roomId));
  if(!room){
    return(

    <div className='roomDetails'>
      <h1>Room not found</h1>
      <p>Please check the room ID and try again.</p>
    </div>
    )
  }else{
    return(
      <div className='roomDetails'>
        <Link to='/rooms'><button className='left-arrow'>Back</button></Link>
        <div className="room" key={room.id}>
          <div className="room-left">
              <img src={room.image} alt="" />
          </div>
              <div className="room-right">
                <h1> {room.name}</h1>
                <p>{room.description}</p>
                <p>
                  <span>Price:</span> ${room.price}
                </p>
                <Link to='/myBooking'><button>Book Now</button></Link>
              </div>
            </div>

      </div>
    )
  }
  
  return (
    <div className='roomdetails'>
      <h1>Room Details</h1>
    </div>
  )
}

export default RoomDetails
