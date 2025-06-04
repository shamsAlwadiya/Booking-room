import React from 'react'
import './Css/Contactus.css'
const Contactus = () => {
  return (
    <div className='contactus'>
      <h2>Contact us </h2>
      <div className="contactus-container">
        <h3>Tell us more and we will find the best solution for you</h3>
        <form className='contactus-form' onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder='Describe your issue' />
        <button className='contactus-btn'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contactus
