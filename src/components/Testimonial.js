import React from 'react'
import './Testimonial.css'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import StarRateIcon from '@material-ui/icons/StarRate';

function Testimonial() {
    return (
        <div className='testimonial' style={{ 
            backgroundSize: 'cover',
            backgroundImage: `url(testimonial-bg.jpg)`,
            backgroundPosition: 'center center' 
            }}>
            <div className="contents__container" style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'white',
                opacity: '.98'}}>
                <p className='testimonial__header'>Testimonials</p>
                <h2>What Clients Say</h2>

                <div className="comment">
                    <p className="quote__icon">
                        <FormatQuoteIcon />
                    </p>
                    <p className="comment__word">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo obcaecati alias similique corrupti voluptatum magni voluptates minus delectus. Laudantium, vero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ullam minima laudantium unde quidem culpa.
                    </p>
                    <p className="comment__name">
                        <b>Engr. Charles</b>
                    </p>
                    <div className="star__rating">
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
