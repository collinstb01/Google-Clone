import React from 'react'
import "./managementstyle.css"
import img1 from '../../images/2.jpg'
import img2 from '../../images/3.jpg'
import img3 from '../../images/4.jpg'

const Management = () => {
    return (
        <div className="manage">
            <div className="manage-overlay"></div>
            <h1 className="straighth1">SERVICES</h1>
            <div className="manage-container">
                <div className="img manage-image1">
                    <img src={img1} alt="" srcset="" />
                    <p>PINTEREST MANAGMENT</p>
                    <div className="manage-overlay2"></div>
                </div>
                <div className="img manage-image2">
                    <img src={img2} alt="" srcset="" />
                    <p>SOCIAL MEDIA MANAGMENT</p>
                    <div className="manage-overlay2"></div>
                </div>
                <div className="img manage-image3">
                    <img src={img3} alt="" srcset="" />
                    <p>A LA CARITE SERVICES</p>
                    <div className="manage-overlay2"></div>
                </div>
            </div>
        </div>
    )
}

export default Management