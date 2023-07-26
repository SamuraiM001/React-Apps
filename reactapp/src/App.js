import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Loginpage from './pages/auth/login';
import Navbar from './navbar';
import Testsolver from './pages/tests/testsolver';
import About from './pages/about/about';
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
        <Navbar/>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/about' element={<About />} />
          <Route path='/tests' element={<Tests />} />
          <Route path='/testsolver' element={<Testsolver />} />
          <Route path='/grades' element={<Grades />} />
        </Routes>
      </Router>
    );
}

export default App;
