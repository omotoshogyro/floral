import React from 'react'
import './SectionOne.css'
function SectionOne() {
    return (
        <div className='section__one'>
            <div className="marginated__image">
            <img src="partners.png" alt=""/>
            </div>
            
            <div className="sectionone__contents">

                <div className="first__section">
                    <img src="sectiononefirst-img.jpg" alt="" className='first__image section__image'/>
                    <div className="text__contents">
                            <p className="first__header">Why we get</p>
                            <h2 className="first__subheader">Our hands dirty for you</h2>
                            <p>To prevent real estate losses and give investors futuristic landed property investment; in terms of verifying the property, acquiring it, documenting it, designing, building and managing the property.</p>
                    </div>
                </div>


                <div className="second__section">
                    <img src="sectiononesecond-img.png" alt="" className='second__image section__image'/>
                        <div className="text__contents">
                            <h3 className='second__header'>18 Real Estate Mistakes That Make People Lose Money In Property Investment.</h3>
                            <p className="second__word">
                            Don't fall victim to landed property scam, demolition, third party claimant and other losses in Nigeria Real Estate.
                            </p>
                            <button className="second__sectionbtn">
                                Access Now
                            </button>

                        </div>
                </div>
            </div>

        </div>
    )
}

export default SectionOne
