import React from 'react'
import img6 from "../../images/6.jpg"
import "./stylehero.css"
const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="left">
                    <h1 className="heroh1">WELCOME</h1>
                    <div className="image">
                        <img src={img6} alt="" srcset="" />
                    </div>
                </div>
                <div className="right">
                    <div className="herorighth1">
                        <h1>hey, there.</h1>
                    </div>
                    <div className="herorightp">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sed veniam possimus placeat. Voluptate neque error commodi, sint ullam laborum vel beatae quas et soluta molestias, aliquam nostrum ut! Alias.</p>
                    </div>
                    <div className="herorightbutt">
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero