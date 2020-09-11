import React from "react";
import "./EventInfo.scss";
import Button from "../Button/Button";

const EventInfo = () => {
  return (
    <div className="event-info">
      <h1>Tropical Freeze</h1>
      <h2 className="event-name">
        Hidden oasis filled with organic house formations
      </h2>
      <div className="event-body">
        <p>
          Hidden within the rings of a barren super-planet is an oasis asteroid
          unlike any other in the universe. Unique cosmic phenomena produce a
          climate that is able to host both abundant vegetation and unusual
          singing crystal formations. Land with the advance party to shelter in
          the warm grooves of interstellar house crustaceans found only in this
          ecosystem.
        </p>
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
