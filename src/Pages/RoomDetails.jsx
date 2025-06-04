import React, { useContext } from 'react'
import { useParams ,Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import rooms from '../Components/Assets/data/rooms.json'
import './Css/RoomDetails.css'
import { FaArrowLeft } from 'react-icons/fa';
import Rooms from './Rooms'
import { AuthContext } from '../Context/AuthContext'


const RoomDetails = () => {
  const {username} =useContext(AuthContext);
  const navigate = useNavigate();
  const handleClicklogin=()=>{
    if(!username){
      <p>Please login or sign up to book rooms</p>
      navigate('/login')
      
    }else{
      navigate(`/bookingform/${room.id}`)

    }
  }
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
        <Link to='/rooms'><button className='left-arrow' onClick={handleClicklogin}>Back</button></Link>
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
              <button onClick={handleClicklogin}>Book Now</button>
              </div>
            </div>

      </div>
    )
  }
  
}

export default RoomDetails
