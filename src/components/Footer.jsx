import React from "react";
import { Link } from 'react-router-dom'


function Footer() {


    return (
        <>
            <footer style={{ marginTop: '20vh', height: '25vh', backgroundColor: '#0D213F', borderRadius: "20px", padding: '25px' }}>

                <div style={{ color: 'white', display: 'flex', height: '20vh', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                    <h3 style={{ color: 'white', }}>Travel Inspiration <span>.</span> </h3>

                    <p style={{ color: 'white', width: '30vw', fontSize: '2vh' }}>Explore your suitable and dream places around the world. Here you can find your right destination.</p>

                </div>
                <div className="fo-a" style={{ color: 'white', display: 'flex', height: '20vh', height: '100%', padding: "10px", marginLeft: '20vh', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                    <h3>Support</h3>

                    <Link>FAQs</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Contact Us</Link>

                </div>
                <div className="b" style={{ color: 'white', display: 'flex', height: '20vh', height: '100%', padding: "10px", marginLeft: '20vh', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}    >

                    <h3>Address</h3>

                    <p> <strong>Address: </strong> 123 Sai World City, Panvel, India</p>
                    <p> <strong>Email: </strong>  amanpathan348.com</p>
                    <p> <strong>Phone: </strong>  +91 9321434984</p>

                </div>

            </footer>
        </>
    )
}

export default Footer;