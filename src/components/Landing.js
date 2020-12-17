import React from 'react'
import './Landing.css'

function Landing() {
    return (
        <div className='landing' style={{ 
            backgroundSize: 'cover',
            backgroundImage: `url(home-bg.jpg)`,
            backgroundPosition: 'center center' 
            }}>

            <div className="contents" style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>

                <div className="animated__texts">
                    <p>We are</p>
                    <h1>FloralHomes GC</h1>
                    <p className='bottom__para'>Foremost Online Property Verification & Real Estate Investment Company</p>
                    <button className="aboutus__btn">
                        About Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing
