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
          src="https://docs.google.com/forms/d/e/1FAIpQLSeBpuU3V0xwW8snidXiu4W2A6s0aJ5fINangc6EHPFCeRU9-A/viewform?embedded=true"
          width="640"
          height="4300"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
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
