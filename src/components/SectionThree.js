import React from 'react'
import './SectionThree.css'


function SectionThree() {
    return (
        <div className='sectionthree'>
            

            <div className="sectionthree__contents">

                <div className="leftpart__contents">
                    <p className='sectionthree__header'>Purpose</p>
                    <h2 className='sectionthree__subheader'>Our Promise to you</h2>

                    <ul className='option__list'>
                        <li>
                        Providing 100% done-for-you real estate services to existing and aspiring property investors.
                        </li>
                        <li>
                        Delivering simplified quality information to the mobile phones of every property investor using technology.
                        </li>
                        <li>
                        Engaging green architecture that revitalizes every soul occupying the space.
                        </li>
                    </ul>

                    <button className="sectionthree__btn">
                        learn More...
                    </button>
                </div>


                <div className="rightpart__contents">
                    <img src="sectionthree-img.jpg" alt=""/>
                </div>
            </div>

        </div>
    )
}

export default SectionThree
