import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProblemCard.css';

function ProblemCard({ problem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`problem-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleCard}>
      <h3 className="problem-title">{problem.title}</h3>
      <div className={`problem-description ${isExpanded ? 'expanded' : ''}`}>
        <p>{problem.description}</p>
        <p>Difficulty: {problem.difficulty}</p>
        <p>Author: {problem.author}</p>
        <div className="problem-actions">
          {/* Use Link with dynamic parameter */}
          <Link to={`/code-submission?id=${problem.id}`}>
            <button>Submit Code</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProblemCard;
