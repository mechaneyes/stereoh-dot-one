import React from 'react'

import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";
import { defaultValues } from "../../components/constants";
import './SingleEvent.scss'

const imgPath = process.env.PUBLIC_URL + "/assets/";

const SingleEvent = () => {
    return (
        <article className="single-event">
            <img src={imgPath + "tropicalFreeze_014.png"} alt="single event page hero" />
            <EventInfo />
        </article>
    )
}

export default SingleEvent
