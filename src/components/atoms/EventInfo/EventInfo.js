import React from "react";

import Button from "../Button/Button";
import Countdown from "../Countdown/Countdown";
import "./EventInfo.scss";

const EventInfo = (props) => {
  return (
    <div className="event-info">
      <h1>{props.title}</h1>
      <h2 className="disclaimer">{props.coming}</h2>
      <h5>{props.subHeadline}</h5>
      <div className="event-body">
        <p>{props.description}</p>
      </div>
      <div className="cta-container">
        <Button
          // buttonUse="enter-space"
          btnUrl={props.btnUrl}
          btnTxt={props.btnTxt}
          targetBlank={props.targetBlank}
          disabled={props.isDisabled}
        />
        <Countdown />
      </div>
    </div>
  );
};

export default EventInfo;
