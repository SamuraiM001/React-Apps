import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Loginpage from './pages/auth/login';
import Navbar from './navbar';
import About from './pages/about/about';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/><Homepage /></>} />
          <Route index element={<><Navbar/><Homepage /></>} />
          <Route path='/login' element={<><Navbar/><Loginpage /></>} />
          <Route path='/about' element={<><Navbar/><About /></>} />
        </Routes>
      </Router>
    );
}

export default App;
