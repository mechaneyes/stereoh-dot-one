import React from "react";
import "./EventInfo.scss";
import { defaultValues } from "../../constants";
import Button from "../Button/Button";

const imgPath = process.env.PUBLIC_URL + "/assets/";
const defaultProps = {
  title: defaultValues.HERO_TITLE,
  body: defaultValues.BODY_LONG,
  short: defaultValues.SUBHEADLINE_SHORT,
};

const EventInfo = (props) => {
  // let {
  //     className,
  //     style,
  //     title,
  //     show,
  //     src
  // } = props
  return (
    <div className="event-info">
      {/* <h1 className="event-name">{defaultProps.title}</h1> */}
      <img
        className="event-logo"
        src={imgPath + "wipeout.png"}
        alt="single event page hero"
      />
      <h2 className="event-name">Lorem ipsum dolor sit amet, consectetur</h2>
      <div className="event-body">
        <p>{defaultProps.body}</p>
        <p>{defaultProps.body}</p>
        <p>{defaultProps.body}</p>
        <p>{defaultProps.body}</p>
      </div>
      <Button btnUrl="theLink" btnTxt="enter" />
      <Button btnUrl="feedback" btnTxt="feedback" />
    </div>
  );
};

export default EventInfo;
