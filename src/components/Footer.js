import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__contents">
                <div className="social">
                    <img src="florallogo.png" alt=""/>
                    <p className='footer__info'>The foremost online property verification and Real Estate investment company that helps clients to acquire verified properties and invest in verified deals.</p>
                    <div className="social__icons">
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                        <LinkedInIcon />
                    </div>
                </div>


                <div className="useful__links">
                    <h2 className="footer__header">
                        useful links
                    </h2>


                    <ul className='links__list'>
                        <li>Home</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                        <li>Univeristy</li>
                        <li>Quick Links</li>
                    </ul>
                </div>


                <div className="getin__touch">
                        <h2 className="footer__header">
                            Get in Touch
                        </h2>


                        <ul className='contact__list'>
                            <li>Mon - Sat: 09:00am - 5:00pm</li>
                            <li>+234-809-444-2019</li>
                            <li>hello@florahomesgc.com</li>
                            <li>Univeristy</li>
                            <li>No 32, East Lake Drive,
                Adiva Plainfields Estate, Ibeju-Lekki, Lagos.</li>
                        </ul>
                </div>

                <div className="terms__condition">
                         <h2 className="footer__header">
                           T&C's
                        </h2>


                        <ul className='links__list'>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            
                        </ul>
                </div>
            </div>

            <div className="last__footer">
                <p>© Copyright 2019 FloraHomes GC | All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
