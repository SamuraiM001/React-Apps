import { useState } from "react";
import "./login.css"


function Loginpage(){
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          setUsername('');
          setPassword('');
        }
        else{
            const data = await response.json();
            console.log(data)
        }
      } catch (error) {

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
              type="password"
              placeholder="Şifrə"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="login-form-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Loginpage;