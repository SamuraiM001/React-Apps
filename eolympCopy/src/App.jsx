import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/main/Home';
import CodeSubmission from './pages/code/Submission';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/code-submission" exact element={<CodeSubmission />} />
      </Routes>
    </Router>
  );
}

export default App;
