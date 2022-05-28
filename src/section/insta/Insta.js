import react from 'react'
import "./insta.css"
import img1 from '../../images/2.jpg'
import img2 from '../../images/3.jpg'
import img3 from '../../images/4.jpg'
const Insta = () => {
    return (
        <div className="insta">
            <div className="insta-container">
                <div className="top">
                    <span>insta</span>
                </div>
                <div className="middle">
                    <div className="text">
                        <span>show</span>
                        <span>up</span>
                        <span>everyday</span>
                        <p>@techboss</p>
                    </div>
                    <div className="img">
                        < img src={img1} />
                    </div>
                    <div className="img">
                        < img src={img2} />
                    </div>
                    <div className="img">
                        < img src={img3} />
                    </div>
                </div>
                <div className="bottom">
                    <span>gram</span>
                </div>
            </div>
        </div>
    )
}

export default Insta