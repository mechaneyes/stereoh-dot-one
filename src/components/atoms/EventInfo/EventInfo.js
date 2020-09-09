import React from "react";
import "./EventInfo.scss";
import { defaultValues } from "../../constants";
import Button from "../Button/Button";

// const imgPath = process.env.PUBLIC_URL + "/assets/";
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
      <h1>Tropical Freeze</h1>
      <h2 className="event-name">Birthdays and Going Aways</h2>
      <div className="event-body">
        <p>Andrey, Kelly, Jen, Ray and Sam all celebrated another trip around the sun. David and Liz packed up for a new chapter in LA</p>
        <p>{defaultProps.body}</p>
      </div>
      <div className="cta-container">
        <Button
          className="large-cta"
          btnUrl="https://space.neoneon.one/VY3mMZa/tropical-freeze"
          btnTxt="enter tropical freeze"
          targetBlank="true"
        />
      </div>
    </div>
  );
};

export default EventInfo;
