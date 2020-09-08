import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

let Button = (props) => {
  return (
    <a
      href={props.btnUrl === "feedback" ? "feedback" : props.btnUrl}
      target={props.targetBlank ? "_blank" : "_self"}
    >
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={"button " + props.type + " transp-bg"}
      >
        {props.children}
        {props.btnTxt ? props.btnTxt : "explore"}
      </button>
    </a>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["destructive", "outline"]),
};

export default Button;
