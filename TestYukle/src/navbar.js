import { Link } from 'react-router-dom';
import "./App.css"
import { useDispatch, useSelector } from "react-redux";
import { Logout } from './redux/actions'; // Assuming you have an action creator named "logout" in your actions file

function Navbar(){
    const isLogged = useSelector(state => state.login);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(Logout()); // Dispatch the logout action
        console.log(isLogged)
    };

    return (
        <nav className="navbar">
            <h1 className="logo">Tərəqqi Liseyi</h1>
            <ul className="nav-links">
                <li><Link to="/">Ana Səhifə</Link></li>
                {!isLogged && (
                    <>
                        <li><Link to="/login">Şəxsi Kabinet</Link></li>
                    </>
                )}
                {isLogged === "TEACHER" && (
                    <>
                        <li><Link to="/tests">Önərilən testlərə Baxmaq</Link></li>
                    </>
                )}
                {isLogged  && isLogged === "STUDENT" && (
                    <>
                        <li><Link to="/tests">Qiymətləndirmə Önərmək</Link></li>
                    </>
                )}
                 {isLogged  && (
                    <>
                        <li><Link onClick={handleLogout}>Çıxış</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
