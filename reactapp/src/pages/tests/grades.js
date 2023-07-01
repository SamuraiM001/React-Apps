import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./grades.css";

function Grades() {
  const [grades, setGrades] = useState([]);
  const utis = localStorage.getItem("UTIS");

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch("http://localhost:8000/gradesof/" + utis);
        if (response.ok) {
          const data = await response.json();
          setGrades(data);
          localStorage.setItem("grades", JSON.stringify(data));
        } else {
          console.error("Error fetching grades");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchGrades();
  }, []);

  return (
    <div className="grades-container">
      {grades.map((grade, index) => (
        <div key={index} className="grade-card">
          <h3 className="test-name">Testin adı: {grade.testName}</h3>
          <p className="result">Nəticəniz: {grade.result}</p>
        </div>
      ))}
    </div>
  );
}

export default Grades;
