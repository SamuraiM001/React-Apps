import React, { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import "./testsolver.css";

function Testsolver() {
  const [searchParams] = useSearchParams();
  const [test, setTest] = useState();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [canWork, setWork] = useState(true);
  const classs = localStorage.getItem("Name");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/tests/" + searchParams.get("id")
        );
        if (!response.ok) {
          console.error("Error fetching data");
        } else {
          const data = await response.json();
          setTest(data);
          setSelectedAnswers(Array(data.QUESTIONS.length).fill(""));
          if (localStorage.getItem("login") !== "TEACHER" && data.Author !== classs) {
            setWork(false);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!canWork) {
    return <Navigate to="/" />;
  }

  if (!test) {
    return <>Loading....</>;
  }

  return (
    <div className="container">
      <h2>{test.TESTNAME}</h2>
      <h3>Suallar:</h3>

      {test.QUESTIONS.map((question, questionIndex) => (
        <div key={questionIndex} className="question">
          <p>
            {question.QUESTION} ( Səviyyə: {question.SCORE} )
          </p>
          <h4>Düzgün Cavablar:</h4>
          <ul className="answers">
              <li  className={`answer disabled`}>
                <label htmlFor={`question-${questionIndex}-answer`}>
                  {question.ANSWERS}
                </label>
              </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Testsolver;
