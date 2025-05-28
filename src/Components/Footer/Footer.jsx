import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
<footer className="footer">
  <div className="footer-container">
    <div className="footer-brand">
      <h3>BookingRooms</h3>
      <p>Find your perfect space for work or rest.</p>
    </div>

    <div className="footer-contact">
      <h4>Contact Us</h4>
      <ul>
        <li>📞 +970 599 123 456</li>
        <li>📧 info@bookingrooms.com</li>
        <li>🌐 www.bookingrooms.com</li>
      </ul>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 BookingRooms. All rights reserved.</p>
  </div>
</footer>

  )
}

export default Footer
