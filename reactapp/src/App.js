import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Loginpage from './pages/auth/login';
import Navbar from './navbar';
import Testsolver from './pages/tests/testsolver';
import About from './pages/about/about';
import Teacherlogin from './pages/auth/teacherlogin';
import Grades from './pages/tests/grades';
import Tests from './pages/tests/tests';
import { useDispatch } from 'react-redux';
import { Login, setUser } from './redux/actions';
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedLogin = localStorage.getItem("login");
    if (storedLogin) {
      dispatch(Login(storedLogin));
      dispatch(setUser({class:localStorage.getItem("class"),UTIS:localStorage.getItem("UTIS")}));
    }
  }, [dispatch]);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/><Homepage /></>} />
          <Route index element={<><Navbar/><Homepage /></>} />
          <Route path='/login' element={<><Navbar/><Loginpage /></>} />
          <Route path='/about' element={<><Navbar/><About /></>} />
          <Route path='/teacherlogin' element={<><Navbar/><Teacherlogin /></>} />
          <Route path='/tests' element={<><Navbar/><Tests /></>} />
          <Route path='/testsolver' element={<><Navbar/><Testsolver /></>} />
          <Route path='/grades' element={<><Navbar/><Grades /></>} />
        </Routes>
      </Router>
    );
}

export default App;
