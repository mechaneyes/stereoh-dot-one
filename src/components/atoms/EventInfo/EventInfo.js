import React from 'react';
import './EventInfo.scss';
import {defaultValues} from '../../constants';
import Button from '../Button/Button'


const defaultProps = {
    title: defaultValues.HERO_TITLE,
    body: defaultValues.BODY_LONG,
    src: defaultValues.HERO_IMAGE_PC 
};

const EventInfo = (props) => {
    // let {
    //     className,
    //     style,
    //     title,
    //     show,
    //     src
    // } = props
    return(
        <div className='event-info'>
            <h1 className="event-name">{defaultProps.title}</h1>
            <div className="event-body">
                <p>{defaultProps.body}</p>
                <p>{defaultProps.body}</p>
            </div>
            <Button />
            <Button />
        </div>
    )
}

export default EventInfo;