import React from 'react';
import {defaultValues} from '../../constants';
import './MenuItem.scss';


const defaultProps = {
    border : 0,
    textOverlay: false,
    href: '/',
    src: defaultValues.MENU_ITEM_IMAGE,
    label:defaultValues.MENU_ITEM_LABEL,
};


 const MenuItem = (props) => {
    let {
        textOverlay,
        label,
        src,
        href,
        description,
    } = props
    return (
        <li className="menu-item" >
            <a href={href}>
                <img src={src} alt={label + ' image'}  />
            <p className="Body-1-Bold">{label}</p>
                {description ? <p className="Body-1-Regular">{defaultValues.MENU_ITEM_DESCRIPTION}</p>: ''}
            </a>
        </li>
    )
}

MenuItem.defaultProps = defaultProps;

export default MenuItem;