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
          title="Stereoh Feedback"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeBpuU3V0xwW8snidXiu4W2A6s0aJ5fINangc6EHPFCeRU9-A/viewform?embedded=true"
          width="640"
          height="5000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="mobile-only"
        >
          Loading…
        </iframe>
        <iframe
          title="Stereoh Feedback"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeBpuU3V0xwW8snidXiu4W2A6s0aJ5fINangc6EHPFCeRU9-A/viewform?embedded=true"
          width="640"
          height="4000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="desktop-only"
        >
          Loading…
        </iframe>

        <RelatedItems />
      </div>
    );
  }
}

export default Homepage;
