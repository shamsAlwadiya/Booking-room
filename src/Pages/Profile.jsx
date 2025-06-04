import React, { useContext, useEffect, useState } from 'react'
import './Css/Profile.css'
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
const Profile = () => {
    const [username , setUsername]=useState('');
    const [email , setEmail]=useState('');
 
 useEffect(()=>{
  const storedData = JSON.parse(localStorage.getItem('user'));
  if(storedData){
    setUsername(storedData.displayName||' ');
    setEmail(storedData.email||' ');
  }
 },[])
 const {userPhoto  ,toggleDropdown }=useContext(AuthContext);
  return (
    <div className='profile'>
      <div className="profile-icon-main" onClick={toggleDropdown}>
              {userPhoto ? (
                <img src={userPhoto} alt="User Avatar" className="avatar" />
              ) : (
                username.charAt(0).toUpperCase()
              )}
            </div>
            <h2>{username}</h2>
            <h3>{email}</h3>
            <Link to={'/settings'}><button className='edit-profile-btn'>edit profile</button></Link>
            
    </div>
  )
}

export default Profile
