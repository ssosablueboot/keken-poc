import React from 'react'
import DefaultHeroImg from '../images/carrito/background-hero-img.png'

import './hero-banner.common.css'


function HeroBanner({backgroundImg, title, subtitle}) {
    return (
        <div className="hero-section">
            <div className="background-hero-img" style={{ backgroundImage: `url(${backgroundImg ? backgroundImg : DefaultHeroImg})` }}></div>
            <div className="gradient-hero-img"></div>
            <div className="container-hero-img">
                <div className="text-container-hero-img">
                    {/* <h1>{title}</h1> */}
                    {title && <h1>{title}</h1>}
                    {subtitle && <span>{subtitle}</span>}
                </div>
            </div>
        </div>
    )
}

export default HeroBanner