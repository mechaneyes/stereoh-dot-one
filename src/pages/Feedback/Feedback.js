import React, { Component } from "react";

import { Link } from "react-router-dom";

// import HomeHero from "../../components/atoms/HomeHero/HomeHero";
// import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";
// import { defaultValues } from "../../components/constants";
import "./Feedback.scss";

// const imgPath = process.env.PUBLIC_URL + "/assets/";

export class Homepage extends Component {
  render() {

    return (
      <div className="feedback">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScEhf1kn6wU-glMrEMbruQkZG5mjCWQU0Iq__Ux4OOGxsHD9A/viewform?embedded=true"
          width="640"
          height="2983"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Feedback form for Stereoh website"
        >
          Loading…
        </iframe>

        <nav className="related-nav">
          <ul>
            <li className="active-item">our experiences</li>
          </ul>
        </nav>

        <section className="related-content">
          <div className="related-grid">
            <article className="one-related-item">
              <img
                className="home-hero-img"
                src="/assets/saturn6_002.jpg"
                alt="neonPlatform hero"
              />
              <div className="related-copy">
                <h3>Saturn 6</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <Link to="/saturn6">
                  <button className="transp-bg">Explore</button>
                </Link>
              </div>
            </article>
            <article className="one-related-item">
              <img
                className="home-hero-img"
                src="/assets/tropicalFreeze_014.png"
                alt="neonPlatform hero"
              />
              <div className="related-copy">
                <h3>Tropical Freeze</h3>
                <h5>Birthdays and Going Aways</h5>
                <Link to="/tropical-freeze">
                  <button className="transp-bg">Explore</button>
                </Link>
              </div>
            </article>
            <article className="one-related-item">
              <img
                className="home-hero-img"
                src="/assets/neoneon_001.jpg"
                alt="neonPlatform hero"
              />
              <div className="related-copy">
                <h3>neoneon</h3>
                <h5>Our first event. Feels like forever ago</h5>
                <Link to="/neoneon">
                  <button className="transp-bg">Explore</button>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
