// src/pages/AboutPage/AboutPage.jsx
import React from "react";
import "./AboutPage.css";

const AboutPage = () => (
  <div className="about-page">
    <div className="about-intro">
      <h1>About Us</h1>
      <p>
        Welcome to our coffee shop, a cozy haven where coffee lovers come to
        unwind and enjoy exceptional brews. Established in 2010, our shop has
        grown from a small local café into a beloved community spot. Our journey
        began with a simple mission: to offer high-quality coffee in a warm and
        inviting atmosphere.
      </p>
      <p>
        Over the years, we have carefully curated our selection of coffees and
        pastries, sourcing the finest ingredients and experimenting with flavors
        to create unique and delightful offerings. Our team is passionate about
        coffee and dedicated to providing an excellent customer experience.
      </p>
      <p>
        Our history is rich with memorable moments and milestones. From hosting
        community events to launching seasonal specials, we’ve aimed to be more
        than just a coffee shop; we strive to be a place where people can
        gather, relax, and enjoy the simple pleasures of life. Thank you for
        being a part of our journey. We look forward to many more years of
        serving you with the best coffee in town.
      </p>
    </div>

    <div className="about-team">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img
            src="https://fore.coffee/wp-content/uploads/2023/07/matcha-ice-1.png"
            alt="Team Member 1"
          />
          <h3>Jane Doe</h3>
          <p>Barista</p>
        </div>
        <div className="team-member">
          <img
            src="https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png"
            alt="Team Member 2"
          />
          <h3>John Smith</h3>
          <p>Manager</p>
        </div>
        <div className="team-member">
          <img
            src="https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png"
            alt="Team Member 3"
          />
          <h3>Emily Johnson</h3>
          <p>Assistant Manager</p>
        </div>
        <div className="team-member">
          <img
            src="https://fore.coffee/wp-content/uploads/2023/07/matcha-ice-1.png"
            alt="Team Member 4"
          />
          <h3>Michael Brown</h3>
          <p>Barista</p>
        </div>
        <div className="team-member">
          <img
            src="https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png"
            alt="Team Member 5"
          />
          <h3>Sarah Davis</h3>
          <p>Customer Service</p>
        </div>
        <div className="team-member">
          <img
            src="https://fore.coffee/wp-content/uploads/2023/07/matcha-ice-1.png"
            alt="Team Member 6"
          />
          <h3>David Wilson</h3>
          <p>Barista</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
