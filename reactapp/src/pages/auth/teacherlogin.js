import { useState } from "react";
import "./login.css";
import { useDispatch,useSelector } from "react-redux";
import { Login } from "../../redux/actions";
import { Navigate } from "react-router-dom";

function Teacherlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const loggedIn = useSelector(state=>state.login)
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  if(loggedIn){
    return <Navigate to="/" />
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        setUsername("");
        setPassword("");
      } else {
        const data = await response.json();
        dispatch(Login("TEACHER"))
        localStorage.setItem("login","TEACHER")
        setUsername("");
        setPassword("");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="login-form-container">
      <div className="login-card">
        <h3 className="login-form-heading">Daxil Olun Müəllim</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Utis Kod"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Şifrə"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              className="show-password-button"
              onClick={handleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button type="submit" className="login-form-button">
            Daxil Ol
          </button>
        </form>
      </div>
    </div>
  );
}

export default Teacherlogin;
