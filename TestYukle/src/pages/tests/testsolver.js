import React, { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import "./testsolver.css";

function Testsolver() {
  const [searchParams] = useSearchParams();
  const [test, setTest] = useState();
  const [answers, setAnswers] = useState([]);
  const [canWork,setWork] = useState(true)
  // const [isworked,setworked] = useState(1000)
  const classs = localStorage.getItem("Name")

  useEffect(() => {
    
      const fetchData = async () => {
        // try {
        //     const response = await fetch(
        //         "http://localhost:8000/isvalid/"+utis+"/"+ searchParams.get("id")
        //         );
        //         if (response.status != 201) {
        //             const data =await response.json()
        //             setworked(data)      
        //         }
        //     } 
        //     catch(error){}
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
                        if(localStorage.getItem("login") !== "TEACHER" && data.Author !== classs){
                            setWork(false)
                        }
                        
 
            }
    } catch (error) {
        console.error(error);
    }
};

fetchData();
});



  // ...Other code...



// useEffect(() => {
//     if(totalScore!=1000){
//         const res =  fetch("http://localhost:8000/validate/"+utis+"/"+searchParams.get("id")+"/"+totalScore);
//         console.log("http://localhost:8000/validate/"+utis+"/"+searchParams.get("id")+"/"+totalScore);
//     }
//   }, [totalScore]);
  
  // ...Other code...
  
  
  if(!canWork){
    return <Navigate to="/"/>
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
          <p>{question.QUESTION}  ( Səviyyə: {question.SCORE} )</p>
          <h4>Düzgün Cavablar:</h4>
          <ul className="answers">
            {question.ANSWERS.map((answer, answerIndex) => (
              <li
                key={answerIndex}
                className={`answer disabled`}
              >
                <input
                  type={question.TYPE === "multiAnswered" ? "checkbox" : "radio"}
                  name={`question-${questionIndex}`}
                  id={`question-${questionIndex}-answer-${answerIndex}`}
                  checked={answers[questionIndex] === answerIndex}
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
    </div>
  );
}

export default Testsolver;
