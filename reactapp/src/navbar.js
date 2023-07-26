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
            <h1 className="logo">Test İşlə</h1>
            <ul className="nav-links">
                <li><Link to="/">Ana Səhifə</Link></li>
                {!isLogged && (
                    <>
                        <li><Link to="/about">Liseyimiz Haqda</Link></li>
                        <li><Link to="/login">Şəxsi Kabinet</Link></li>
                    </>
                )}
                {isLogged === "TEACHER" && (
                    <>
                        <li><Link to="/searchforgrades">Şagird Qiymətlərinə Baxmaq</Link></li>
                        <li><Link to="/createtest">Test Təyin Etmək</Link></li>
                    </>
                )}
                {isLogged  && isLogged === "STUDENT" && (
                    <>
                        <li><Link to="/grades">Qiymətlərim</Link></li>
                        <li><Link to="/tests">Qiymətləndirmələr</Link></li>
                    </>
                )}
                 {isLogged  && (
                    <>
                        <li><Link to="/" onClick={handleLogout}>Çıxış</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
