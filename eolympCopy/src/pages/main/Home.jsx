import React, { useState, useEffect } from 'react';
import ProblemCard from '../../components/ProblemCard'; // Import the ProblemCard component
import "../../components/ProblemCard.css";

function Home() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // Make a GET request to the Express.js API endpoint
    fetch('http://localhost:3001/problems')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProblems(data.problems);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array [] ensures this effect runs once on component mount

  return (
    <div>
      <div>
        <h2>Problems</h2>
        {problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
}

export default Home;
