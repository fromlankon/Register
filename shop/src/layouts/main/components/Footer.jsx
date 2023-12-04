import React from 'react'
import "../components/Footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="footerMain">
                <div className="footerTop">
                    <div className="footerDiv">
                        <div className='text1'> Company</div>
                        <div className="footerDiv2">
                            <Link className="text2"> About Us </Link>
                            <Link className="text2"> Our Services </Link>
                            <Link className="text2"> Privacy Policy </Link>
                            <Link className="text2"> Careers </Link>
                        </div>
                    </div>
                    <div className="footerDiv">
                        <div className="getHelp text1"> Get Help</div>
                        <div className="footerDiv2">
                            <Link className="text2"> FAQ </Link>
                            <Link className="text2"> Shipping </Link>
                            <Link className="text2"> Returns </Link>
                            <Link className="text2"> Order Status </Link>
                            <Link className="text2"> Payment </Link>
                        </div>
                    </div>
                    <div className="footerDiv">
                        <div className="text1"> Online Shop </div>
                        <div className="footerDiv2">
                            <Link className="text2"> Watch </Link>
                            <Link className="text2"> Bag </Link>
                            <Link className="text2"> Shoes </Link>
                            <Link className="text2"> Dress </Link>
                            <Link className="text2"> Other </Link>
                        </div>
                    </div>
                    <div className="footerDiv">
                        <div className="text1"> Follow Us</div>
                        <div className="footerDiv2">
                            <Link to={"https://www.instagram.com"} className="text2"> Instagram </Link>
                            <Link to={"https://www.facebook.com"} className="text2"> Facebook </Link>
                            <Link to={"https://twitter.com"} className="text2"> Twitter </Link>
                            <Link to={"https://www.youtube.com"} className="text2"> Youtube </Link>
                        </div>
                    </div>
                </div>
                <div className="footerLogo">
                    <Link to={"/home"}> <img src="../../src/images/Logo White.png" /> </Link>
                    <p className="text3"> Trendy Shop | Copyright © 2023 Garage - All rights reserved | Designed By: <Link target="_blank" to={"https://github.com/fromlankon"} id='fromlankon'> Rafa </Link> </p>
                </div>
            </div>
        </footer>
    )
}
