import React from 'react'
import About from '../section/about/About'
import Banner from '../section/banner/Banner'
import Hero from '../section/hero/hero'
import Management from '../section/management/management'
import Navbar from '../section/navbar/navbar'
import Banner2 from '../section/Banner2/Banner2'
import Insta from '../section/insta/Insta'
import Footer from '../section/footer/Footer'
import "./stylehome.css"

const Home = () => {
    return (
        <div className='home'>
            <div className="overlay"></div>
            < Navbar />
            < Hero />
            <Banner />
            < Management />
            < About />
            <Banner2 />
            <Insta />
            <Footer />
        </div>
    )
}

export default Home