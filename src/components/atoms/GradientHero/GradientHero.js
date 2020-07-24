import React from 'react'

import EventInfo from "../EventInfo/EventInfo";
// import { defaultValues } from "../../components/constants";
import './GradientHero.scss'

const imgPath = process.env.PUBLIC_URL + "/assets/";

const GradientHero = () => {
    return (
        <article className="gradient-hero">
            <img className="hero-image" src={imgPath + "tropicalFreeze_066.png"} alt="single event page hero" />
            <EventInfo />
            <div className="gradient"></div>
        </article>
    )
}

export default GradientHero
