import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './Submission.css';

function CodeSubmission() {
  const { problemId } = useParams();
  const location = useLocation();
  const [problem, setProblem] = useState({});
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('python'); // Initialize with a default language

  useEffect(() => {
    // Fetch the problem data based on the problemId
    // You can make a GET request to your API here
    fetch(`/problems/${problemId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProblem(data);
      })
      .catch((error) => {
        console.error('Error fetching problem data:', error);
      });
  }, [problemId]);

  // Handle code input change
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  // Handle programming language selection
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // Handle code submission
  const handleSubmit = () => {
    // Make a POST request with code and selectedLanguage
    // You can send the data to your server for processing here
  };

  // Handle going back
  const handleBack = () => {
    // Use the location object to get the previous page pathname
    const previousPath = location.state?.previousPath || '/';

    // Navigate to the previous page pathname
    window.location.pathname = previousPath;
  };

  return (
    <div className="submission-container">
      <div className="header">
        <button className="go-back-button" onClick={handleBack}>
          &lt; Go Back
        </button>
      </div>

      <div className="problem-info">
        <h2 className="problem-title">Problem: {problem.title}</h2>
        <p className="problem-description">{problem.description}</p>

        
      </div>
      <div className="input-output">
      <h2 className="problem-title">Inputs:</h2>
        {problem.inputs &&
          problem.inputs.map((input, index) => (
              <p key={index}>{input}</p>
              ))}
              <h2 className="problem-title">Outputs:</h2>
        {problem.outputs &&
          problem.outputs.map((output, index) => (
            <p key={index}>Output {index + 1}: {output}</p>
          ))}
      </div>

      <label htmlFor="code" className="input-label">
        Code:
      </label>
      <textarea
        id="code"
        className="code-input"
        value={code}
        onChange={handleCodeChange}
      />

      <label htmlFor="language" className="input-label">
        Programming Language:
      </label>
      <select
        id="language"
        className="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="python">Python</option>
        <option value="cpp">C++</option>
      </select>

      

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CodeSubmission;
