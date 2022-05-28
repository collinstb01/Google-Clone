import react from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="top">
                    <div className="top1">
                        <h1>social</h1>
                        <h1>savvy</h1>
                    </div>
                    <div className="top2">
                        <ul>
                            <li>About</li>
                            <li>Services</li>
                            <li>Shop</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="top3">
                        < input placeholder="search" />
                    </div>
                </div>
                <div className="bottom">
                    <p>@copyright social savvy 2019, | Developed By Ja&#128520;den</p></div>
            </div>
        </div>
    )
}

export default Footer