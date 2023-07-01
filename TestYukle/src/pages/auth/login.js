import { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { Login, setUser } from "../../redux/actions";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false); // Added state for login error
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.login);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UTISCode: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.userType)
        dispatch(Login(data.userType));
        dispatch(setUser({UTIS:username,name:data.name ,subject:data.Subject}));
        localStorage.setItem("login",data.userType);
        localStorage.setItem("UTIS", username);
        localStorage.setItem("Name", data.name);
        localStorage.setItem("Subject", data.Subject );

        setUsername("");
        setPassword("");
        setLoginError(false); // Reset login error state
        console.log(data);
      } else {
        setUsername("");
        setPassword("");
        setLoginError(true); // Set login error state to true
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-card">
        <h3 className="login-form-heading">Daxil Ol</h3>
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
          {loginError && <p className="error-message">Belə bir istifadəçi yoxdur</p>}
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
