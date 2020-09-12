import React from "react";

import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";

import "./SignUp.scss";

// const imgPath = process.env.PUBLIC_URL + "/assets/";

const SignUp = () => {
  document.title = "Stereoh | Sign Up";

  return (
    <div className="single signUp">
      <section className="body-copy">
        <div className="home-hero-content">
          <h1>Let's Stay In Touch!</h1>
          <p className="home-hero-subheadline">
            We are getting ready to launch a complete virtual concert platform
            that will connect music creators and music fans in new and exciting
            ways. Sign up to receive the latest updates and be the first to gain
            exclusive early access.
          </p>
          <div id="mc_embed_signup">
            <form
              action="https://one.us17.list-manage.com/subscribe/post?u=55b1042094d7ceee5fdf20bf9&amp;id=996675cb7c"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
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
                <div className="absStyle" aria-hidden="true">
                  <input
                    type="text"
                    name="b_55b1042094d7ceee5fdf20bf9_996675cb7c"
                    tabIndex="-1"
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

      <RelatedItems />
    </div>
  );
};

export default SignUp;
