import React from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { authUser } from "../context/AuthContext";
import { MdFlightTakeoff } from "react-icons/md";



function Nav() {

    const { logoutUser, msg } = useContext(authUser)

    return (
        <div>
            <nav>

                <Link to={'/'}> <h2> Travel Inspiration.</h2> </Link>


                <div className="a">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/gallery'}>Gallery</Link>
                    <Link>About Us</Link>

                </div>

                {msg ?

                    (<div className="btn">
                        <button onClick={logoutUser}>Logout</button>
                     <Link to={'/personal'}>   <MdFlightTakeoff style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "3vh", color: "white"}} />  </Link> 

                        {/* <Link to={'/login'} onClick={logoutUser}>Logout</Link> */}
                        {/* <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '20px'}}>{msg.email.trim('@')}</p> */}
                    </div>) :

                    (<div className="btn">
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/sign-up'}>Sign up</Link>
                    </div>)
                }


            </nav >
        </div >
    )
}


export default Nav;