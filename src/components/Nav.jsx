import React from "react";
import { Link, Links } from 'react-router-dom'


function Nav() {

    return (
        <div>
            <nav>

                <Link to={'/'}> <h2> Travel Inspiration.</h2> </Link>


                <div className="a">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/gallery'}>Gallery</Link>
                    <Link>About Us</Link>

                </div>

                <div className="btn">
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/sign-up'}>Sign up</Link>

                </div>
            </nav>
        </div>
    )
}


export default Nav;