import React, { useEffect, useState } from 'react'
import './NavBar.css'
import SearchIcon from '@material-ui/icons/Search';

function NavBar() {

    const [show, setShow] = useState(false)

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            if(window.scrollY > 40){
                setShow(true)
            }
            else{
                setShow(false)
            }
        });
        return () => {
            window.removeEventListener('scroll')
        }

    }, [])

    return (
        
            <div className={`navbar__content ${show && 'nav__bg'}`}>

                <div className="logo">
                    <img src="florallogo.png" alt=""/>
                </div>
                 
                <div className="navbar__links">
                    <ul >
                        <li className='navbar__menus'>Home</li>
                        <li className='navbar__menus'>About</li>
                        <li className='navbar__menus'>Products</li>
                        <li className='navbar__menus'>Our Estates</li>
                        <li className='navbar__menus'>Blogs</li>
                        <li className='navbar__menus'>Subscription</li>
                    </ul>
                </div>
                

                <div className="other__stuff">
                    <ul >
                        <li className='searchicon'>
                            <SearchIcon />
                        </li>
                        <li className='registerlogin__btn'>
                            <button className='register__btn'>
                                Register / Login
                            </button>
                        </li>
                    </ul>
                </div>
                
                
            </div>
        
    )
}

export default NavBar
