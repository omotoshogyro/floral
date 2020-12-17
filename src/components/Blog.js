import React from 'react'
import './Blog.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function Blog() {

    const blogPosts = [
        {
            image: 'first.jpg',
            person: 'florahomes admin',
            date: '2020-12-14',
            offer: 'Property Documentation',
            headline: 'Lagos set to go digital in land related services come 2021'
        },
        {
            image: 'second.jpg',
            person: 'florahomesgc',
            date: '2020-10-07',
            offer: 'Real Estate Investment',
            headline: 'Know your land size'
        },
        {
            image: 'third.jpg',
            person: 'florahomesgc',
            date: '2020-05-07',
            offer: 'Property Verification & Authentication',
            headline: 'Know your property title'
        },


    ]



    return (
        <div className='blog'>
           <div className="blog__contents">
               <h3 className="blog__header">
                   Blogs
               </h3>

               <h2 className="blog__subheader">
                   Eye Opening Contents
               </h2>


                <div className="blog__lists">

                    {blogPosts.map(({image, person, date, offer, headline} )=> {
                        return (
                            <div className="blog__div">
                        <img src={image} alt=""/>


                           <div className="blog__content">
                            <div className="first__line">
                                <div className="person">
                                    <PermIdentityIcon />
                                    <p>{person}</p>
                                </div>
                                <div className="calendar">
                                    <DateRangeIcon />
                                    <p>{date}</p>
                                </div>
                            </div>

                            <div className="secondline">
                                <LocalOfferIcon />
                                <p>{offer}</p>
                            </div>
                            
                            <p className='head__line'>{headline}</p>

                          
                           </div>
                           <div className="separate__btn">
                               <button className="read__more">
                                   Read More
                               </button>
                           </div>
                    </div>
                        )
                    })}

                    

                </div>
           </div>
        </div>
    )
}

export default Blog
