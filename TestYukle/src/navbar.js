import { Link } from 'react-router-dom';
import "./App.css"
import { useDispatch, useSelector } from "react-redux";
import { Logout } from './redux/actions';

function Navbar() {
  const isLogged = useSelector(state => state.login);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
    window.location.href = '/';
  };
  const imageUrl = 'https://scontent.fgyd24-1.fna.fbcdn.net/v/t39.30808-6/294388961_495323959062220_5698983063613058543_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=urrsAYvbya8AX9N16x7&_nc_ht=scontent.fgyd24-1.fna&oh=00_AfCtW9sBpTpOlBSbxCxZCbgV_42mTtBn6czC-iYOzq_dGw&oe=650FA645';

  return (
    <nav className="navbar">
        <div className="logo-container">
          <a href="/" style={{textDecoration:"none"}} className="logo">Tərəqqi Liseyi</a>
        </div>
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
        {isLogged && isLogged === "STUDENT" && (
          <>
            <li><Link to="/tests">Qiymətləndirmə Önərmək</Link></li>
          </>
        )}
        {isLogged && (
          <>
            <li><Link onClick={handleLogout}>Çıxış</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
