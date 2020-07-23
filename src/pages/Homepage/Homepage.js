import React, { Component } from 'react'

import HomeHero from '../../components/atoms/HomeHero/HomeHero'

const iconPath = process.env.PUBLIC_URL + '/assets/';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <HomeHero homeHeroImg={iconPath + 'tropicalFreeze_014.png'} />
            </div>
        )
    }
}

export default Homepage
