import React from 'react'
import "./about.css"

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-left">
                    <h1 className='about-lefth1'>about</h1>
                    <h1 className='about-lefth2'>social</h1>
                    <h1 className='about-lefth3'>savvy</h1>
                </div>
                <div className="about-right">
                    <p className="about-p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui maxime inventore optio quaerat atque laboriosam repudiandae repellendus adipisci quis nobis!
                    </p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>

    )
}

export default About