import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './navbar';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/><Homepage /></>} />
          <Route index element={<><Navbar/><Homepage /></>} />
        </Routes>
      </Router>
    );
}

export default App;
