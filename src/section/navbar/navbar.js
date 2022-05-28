import React from 'react'
import "./stylenavbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <h1>social</h1>
                    <h1>SAVY</h1>
                </div>
                <div className="nav">
                    <ul>
                        <li>ABOUT</li>
                        <li>WORK WITH ME</li>
                        <li>SHOPS</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar