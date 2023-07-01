import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Loginpage from './pages/auth/login';
import Navbar from './navbar';
import Testsolver from './pages/tests/testsolver';
import Createtest from './pages/tests/createtest';
import Teacherlogin from './pages/auth/teacherlogin';
import Tests from './pages/tests/tests';
import { useDispatch } from 'react-redux';
import { Login, setUser } from './redux/actions';
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedLogin = localStorage.getItem("login");console.log(localStorage.getItem("Subject"))
    if (storedLogin) {
      dispatch(Login(storedLogin));
      dispatch(setUser({UTIS:localStorage.getItem("UTIS"),name:localStorage.getItem("Name"),subject:localStorage.getItem('Subject')}));
    }
  }, [dispatch]);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/><Homepage /></>} />
          <Route index element={<><Navbar/><Homepage /></>} />
          <Route path='/login' element={<><Navbar/><Loginpage /></>} />
          <Route path='/tests' element={<><Navbar/><Tests /></>} />
          <Route path='/testsolver' element={<><Navbar/><Testsolver /></>} />
          <Route path='/createtest' element={<><Navbar/><Createtest /></>} />
        </Routes>
      </Router>
    );
}

export default App;
