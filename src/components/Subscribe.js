import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import './Subscribe.css'

function Subscribe() {
    return (
        <div className='subscribe'>
            <div className="subscribe__contents">

                <div className="subscribe__header">
                    <EmailIcon className='message__icon'/>
                    <h3>Subscribe for Updates</h3>
                </div>

                <p className="subscribe__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil mollitia, <br></br>consectetur dolor repudiandae id fuga sed reprehenderit consequuntur
                </p>

                <div className="subscribe__input">
                    <SendIcon className='inputIcon'/>
                     <input type="text" className='input'/>
                </div>
               
            </div>
        </div>
    )
}

export default Subscribe
