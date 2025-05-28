import React from "react";
import { Link } from "react-router-dom";
import "./Css/Home.css";
const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to your ideal destination for relaxation</h1>
        <p>
          Book your room easily and enjoy a comfortable and relaxing experience.
        </p>
        <Link to="/rooms" className="btn">
          Explore Now
        </Link>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Services</h2>
        <div className="service-list">
          <div className="service">comfortable environment</div>
          <div className="service">Quiet and privacy</div>
          <div className="service">Free drinks</div>
          <div className="service">Reasonable prices</div>
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="reviews-section">
        <h2 className="review-title">What Our Customers Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <p className="review-quote">
              “I booked a workspace for my team and it was a great experience.
              The support team was amazing.”
            </p>
            <p className="review-author">— Sarah A.</p>
          </div>

          <div className="review-card">
            <p className="review-quote">
              “Comfortable, quiet, and perfect for focusing on work. Highly
              recommend!”
            </p>
            <p className="review-author">— Omar T.</p>
          </div>

          <div className="review-card">
            <p className="review-quote">
              “The environment is great and I loved the free drinks and friendly
              staff.”
            </p>
            <p className="review-author">— Lina H.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
