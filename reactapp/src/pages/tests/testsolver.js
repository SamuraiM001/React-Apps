import React, { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import "./testsolver.css";
import { useSelector } from "react-redux";

function Testsolver() {
  const [searchParams] = useSearchParams();
  const [test, setTest] = useState();
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState([]);
  const [canWork,setWork] = useState(true)
  const [isworked,setworked] = useState(1000)
  const [submitted, setSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(1000);
  const utis = localStorage.getItem("UTIS")
  const classs = localStorage.getItem("class")

  useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch(
                "http://localhost:8000/isvalid/"+utis+"/"+ searchParams.get("id")
                );
                if (response.status != 201) {
                    const data =await response.json()
                    setworked(data)      
                }
            } 
            catch(error){}
          try {
              const response = await fetch(
                  "http://localhost:8000/tests/" + searchParams.get("id")
                  );
                  if (!response.ok) {
                      console.error("Error fetching data");
                    } else {
                        const data = await response.json();
                        setTest(data);
                        setAnswers(Array(data.QUESTIONS.length).fill(null));
                        if(data.CLASS != classs){
                            setWork(false)
                        }
                        
 
            }
    } catch (error) {
        console.error(error);
    }
};

fetchData();
}, []);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    if (!submitted) {
      setAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[questionIndex] = answerIndex;
        return updatedAnswers;
      });
    }
  };

  // ...Other code...

const handleSubmit = async () => {
    setTotalScore(0)
    const resultArray = test.QUESTIONS.map((question, questionIndex) => {
      const selectedAnswerIndex = answers[questionIndex];
      const correctAnswerIndex = parseInt(question.RIGHTANSWER) - 1;
      const isCorrect = selectedAnswerIndex === correctAnswerIndex;
      const score = isCorrect ? question.SCORE : 0;
      setTotalScore(scoree => scoree + score);
      return { isCorrect, score };
    });
    setResult(resultArray);
    setSubmitted(true);
};

useEffect(() => {
    if(totalScore!=1000){
        const res =  fetch("http://localhost:8000/validate/"+utis+"/"+searchParams.get("id")+"/"+totalScore);
        console.log("http://localhost:8000/validate/"+utis+"/"+searchParams.get("id")+"/"+totalScore);
    }
  }, [totalScore]);
  
  // ...Other code...
  
  
  if(!canWork){
    return <Navigate to="/"/>
  }

  if (!test && isworked) {
    return <>Loading....</>;
  }
  if (isworked !=1000) {
    return <>Bu testi yerinə yetirmisiniz.Aldığınız bal : {isworked}</>;
  }
    return (
    <div className="container">
      <h2>{test.TESTNAME}</h2>
      <h3>Suallar:</h3>

      {test.QUESTIONS.map((question, questionIndex) => (
        <div key={questionIndex} className="question">
          <p>{question.QUESTION} (Bal:{question.SCORE})</p>
          <ul className="answers">
            {question.ANSWERS.map((answer, answerIndex) => (
              <li
                key={answerIndex}
                className={`answer ${submitted ? "disabled" : ""}`}
                onClick={() => handleAnswerChange(questionIndex, answerIndex)}
              >
                <input
                  type={question.TYPE === "multiAnswered" ? "checkbox" : "radio"}
                  name={`question-${questionIndex}`}
                  id={`question-${questionIndex}-answer-${answerIndex}`}
                  checked={answers[questionIndex] === answerIndex}
                  disabled={submitted}
                  onChange={() => {}}
                />
                <label htmlFor={`question-${questionIndex}-answer-${answerIndex}`}>
                  {answer}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <button className="submit-btn" onClick={handleSubmit} disabled={submitted}>
        Bitir
      </button>

      {submitted && (
        <div className="feedback">
          <p>Total Score: {totalScore}</p>
        </div>
      )}
    </div>
  );
}

export default Testsolver;
