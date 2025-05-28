import React from "react";
import './Css/About.css'
const About = () => {
  return (
    <div className="about">
      <section className="about-description-section">
        <div className="about-descriptioion">
          <h2>About</h2>
         <p>
  BookSpace is a smart and user-friendly online platform that allows users to easily book a wide variety of workspaces. Whether you're a freelancer seeking a quiet private room, a student looking for a shared coworking space, or a company in need of a fully-equipped meeting hall, BookSpace provides tailored solutions for every need. 

  The platform is designed to serve individuals, small teams, and large organizations alike, making it simple to search, compare, and reserve spaces that suit your specific requirements. With advanced filtering options and real-time availability, users can make confident decisions without unnecessary hassle.

  BookSpace aims to streamline the entire reservation process—from browsing to booking—ensuring a seamless and efficient experience. Whether it’s for focused work, team collaboration, or hosting important business events, BookSpace helps you find the right place at the right time, all in just a few clicks.
</p>

        </div>
      </section>
      <section className="about-goals-section">
        <div className="about-goals">
          <h2> Our Goal</h2>
          <p>
  Our goal at BookSpace is to redefine how individuals and organizations discover and reserve workspaces. We aim to eliminate the traditional complexities and delays that come with booking meeting halls, coworking areas, or private rooms by offering a modern, digital solution that puts users first.

  By building an intuitive interface and integrating real-time availability, we strive to save users time and effort. Whether you're planning a business meeting, looking for a productive study corner, or organizing a collaborative session with your team, BookSpace makes the process quick, transparent, and accessible.

  Ultimately, our mission is to empower people with the tools they need to work more efficiently—anytime, anywhere—by connecting them to the right space for their goals.
</p>

        </div>
      </section>
      <section className="about-features-section">
        <div className="about-features">
          <h2>🏆 Key Features</h2>
          <ul>
            <li>Easy-to-use interface</li>
            <li>Sign in with Google or Github</li>
            <li>Booking management system</li>
            <li>Responsive design for all devices</li>
            <li>Notifications and alerts</li>
          </ul>
        </div>
      </section>
      <section className="about-ourTeam-section">
        <div className="about-ourTeam">
          <h2>Development Team</h2>
          <p style={{color:'#555'}}>BookSpace was developed by a collaborative team:</p>
          <div className="team">
            <p>
              <span>Shams Alwadiya</span> – Frontend Developer specialized in
              React.js and CSS, responsible for building the user interface and
              ensuring a smooth user experience.
            </p>
            <p>
              <span>Nuha Sammour</span> – Backend Developer specialized in
              Laravel, responsible for building the server-side logic and API
              integration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
