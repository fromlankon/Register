import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    return (
        <div id='header'>
            <div className='headerMain'>
                <div id='logo'>
                    <Link to={"/home"}>
                        <img src="../src/images/Shop Logo.png" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to={"/home"} className='home'> Home </Link>
                    </li>
                    <li>
                        <Link className='about'> About </Link>
                    </li>
                    <li>
                        <Link className='pages'> Pages </Link>
                    </li>
                    <li>
                        <Link className='blog'> Blog </Link>
                    </li>
                    <li>
                        <Link className='contact'> Contact </Link>
                    </li>
                </ul>
                <Link to={"/auth/login"} id='login'> Login  </Link>
            </div>
        </div>
    )
}
