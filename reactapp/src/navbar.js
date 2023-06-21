import { Link } from 'react-router-dom';
import "./App.css"
function navbar(){
    return (
        <nav className="navbar">
            <h1 className="logo"></h1>
            <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
export default navbar;