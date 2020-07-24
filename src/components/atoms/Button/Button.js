import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';


let Button = (props) => {
    return(
        <button 
            onClick={props.onClick}
            disabled={props.disabled}
            className={"button " + (props.type) + ' transp-bg'}>
            {props.children}
            explore
        </button>
    )
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['destructive', 'outline'])
}

export default Button;