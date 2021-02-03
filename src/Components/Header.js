import React from 'react'

function Header() {
    return (
        <div className="header">
        <img src={process.env.PUBLIC_URL + "/images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"} alt="hero_img"></img>
            <div className="header-content">
                <h1 className="heading">INNOTHON - 2021</h1>
                <p>Your Gateway to Think & Innovate</p>
                <div className="head-btns">
                    <button>Register Now</button>
                    <button>Learn More</button>
                </div>
                
            </div>
        </div>
    )
}

export default Header
