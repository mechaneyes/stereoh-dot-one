import React, { useState } from "react";

import Button from "../../components/atoms/Button/Button";
import relatedItems from "../../components/related-data";
import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";
import "./SignUp.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const SignUp = () => {
  const [extras, setExtras] = useState(0);

  let shownItems = [];

  if (extras === 0) {
    shownItems = relatedItems.slice(0, 2);
    // } else if (extras === 1) {
    //   shownItems = relatedItems.slice(3, 6);
    // } else if (extras === 2) {
    //   shownItems = relatedItems.slice(6, 9);
  }

  const relatedList = shownItems.map((rel, i) => (
    <RelatedItem key={i} {...rel} />
  ));

  return (
    <div className="single signUp">
      <section className="body-copy">
        <div class="home-hero-content">
          <h1>Let's Stay In Touch!</h1>
          <p class="home-hero-subheadline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nunc dolor, porttitor non felis et, auctor elementum dolor.
          </p>
          <div id="mc_embed_signup">
            <form
              action="https://one.us17.list-manage.com/subscribe/post?u=55b1042094d7ceee5fdf20bf9&amp;id=996675cb7c"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                //   value=""
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                />
                <div className='absStyle' aria-hidden="true">
                  <input
                    type="text"
                    name="b_55b1042094d7ceee5fdf20bf9_996675cb7c"
                    tabindex="-1"
                    value=""
                  />
                  <div className="submitStyle">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <nav className="related-nav">
        <ul>
          <li
            className={`${extras === 0 ? "active-item" : ""}`}
            onClick={() => setExtras(0)}
          >
            our experiences
          </li>
        </ul>
      </nav>

      <section class="related-content">
        <div class="related-grid">
          <article class="one-related-item">
            <img
              class="home-hero-img"
              src="/assets/jenAndMe.png"
              alt="neonPlatform hero"
            />
            <div class="related-copy">
              <h3>It's just (House of Dupree)</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <a href="#">
                <button class="transp-bg">Explore</button>
              </a>
            </div>
          </article>
          <article class="one-related-item">
            <img
              class="home-hero-img"
              src="/assets/tropicalFreeze_066.png"
              alt="neonPlatform hero"
            />
            <div class="related-copy">
              <h3>Pier Children</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <a href="#">
                <button class="transp-bg">Explore</button>
              </a>
            </div>
          </article>
          <article class="one-related-item">
            <img
              class="home-hero-img"
              src="/assets/jenAndMe.png"
              alt="neonPlatform hero"
            />
            <div class="related-copy">
              <h3>It's just (House of Dupree)</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <a href="#">
                <button class="transp-bg">Explore</button>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
