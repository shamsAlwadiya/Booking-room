import React from "react";
import "./Css/Rooms.css";
import { Link } from "react-router-dom";
import rooms from "../Components/Assets/data/rooms.json";
const Rooms = () => {
  console.log('rooms:' ,rooms);
  return (
    <div className="rooms">
      <div className="rooms-container">
        {rooms.map((room) => {
          return (
            <div className="roomCard" key={room.id}>
              <img src={room.image} alt="" />
              <div className="roomCard-content">
                <h1> {room.name}</h1>
                <p>
                  <span>Price:</span> ${room.price}
                </p>
                <Link to={`/roomDetails/${room.id}`}><button>View details</button></Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
