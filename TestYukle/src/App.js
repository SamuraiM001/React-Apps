import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Loginpage from './pages/auth/login';
import Navbar from './navbar';
import Testsolver from './pages/tests/testsolver';
import Createtest from './pages/tests/createtest';
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
      dispatch(setUser({ UTIS: localStorage.getItem("UTIS"), name: localStorage.getItem("Name"), subject: localStorage.getItem('Subject') }));
    }
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route index element={<Homepage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/tests' element={<Tests />} />
        <Route path='/testsolver' element={<Testsolver />} />
        <Route path='/createtest' element={<Createtest />} />
      </Routes>
    </Router>
  );
}

export default App;
