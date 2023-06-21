import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./App.css"

function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="logo">Tərəqqi Liseyi</h1>
            <ul className="nav-links">
            <li><Link to="/">Ana Səhifə</Link></li>
            <li><Link to="/about">Liseyimiz Haqda</Link></li>
            <li><Link to="/login">Şəxsi Kabinet</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;