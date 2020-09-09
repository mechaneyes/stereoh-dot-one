import React, { Component } from "react";

import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./Feedback.scss";

// const imgPath = process.env.PUBLIC_URL + "/assets/";

export class Homepage extends Component {
  render() {
    document.title = "Stereoh | Feedback";
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

        <RelatedItems />
      </div>
    );
  }
}

export default Homepage;
