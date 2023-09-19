import React, { useState } from "react";
import "./createtest.css";

function Createtest() {
  const [formFields, setFormFields] = useState([
    {
      input1: "",
      input2: "",
      selectedOption: "Asan", // Default value
    },
  ]);
  const [hardness, setHardness] = useState("Asan"); // Default value
  const [classs, setClass] = useState("5"); // Default value
  const [theme, setTheme] = useState("");

  const handleAddFields = () => {
    const newFieldSet = {
      input1: "",
      input2: "",
      selectedOption: "Asan", // Default value
    };
    setFormFields([...formFields, newFieldSet]);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedFields = [...formFields];
    updatedFields[index][name] = value;
    setFormFields(updatedFields);
  };

  const handleDropdownChange = (event, index) => {
    const { name, value } = event.target;
    const updatedFields = [...formFields];
    updatedFields[index][name] = value;
    setFormFields(updatedFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const allFields = {
      Author: localStorage.getItem("Name"),
      TESTNAME: theme,
      Subject: localStorage.getItem("Subject"),
      CLASS: classs,
      DIFFICULTY: hardness,
      QUESTIONS: formFields.map((fields, index) => ({
        QUESTION: fields.input1,
        ANSWERS: fields.input2,
        SCORE: fields.selectedOption,
      })),
    };
    console.log(allFields);
    Example:
    fetch("http://localhost:8000/addTest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allFields),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
        window.location.href = '/tests';
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <div className="card">
        <div className="form-group">
          <label>
            Mövzu:
            <input
              type="text"
              name="theme"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Sinif:
            <select
              name="classs"
              value={classs}
              onChange={(event) => setClass(event.target.value)}
              className="form-input"
            >
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Çətinlik:
            <select
              name="hardness"
              value={hardness}
              onChange={(event) => setHardness(event.target.value)}
              className="form-input"
            >
              <option value="Asan">Asan</option>
              <option value="Orta">Orta</option>
              <option value="Çətin">Çətin</option>
            </select>
          </label>
        </div>
      </div>
      {formFields.map((fields, index) => (
        <div key={index} className="card">
          <div className="form-group">
            <label>
              Sual:
              <input
                type="text"
                name="input1"
                value={fields.input1}
                onChange={(event) => handleInputChange(event, index)}
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Cavabı:
              <input
                type="text"
                name="input2"
                value={fields.input2}
                onChange={(event) => handleInputChange(event, index)}
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Çətinlik:
              <select
                name="selectedOption"
                value={fields.selectedOption}
                onChange={(event) => handleDropdownChange(event, index)}
                className="form-input"
              >
                <option value="Asan">Asan</option>
                <option value="Orta">Orta</option>
                <option value="Çətin">Çətin</option>
              </select>
            </label>
          </div>
        </div>
      ))}
      <div className="form-group">
        <button
          type="button"
          className="add-fields-button"
          onClick={handleAddFields}
        >
          Sual Əlavə Etmək
        </button>
      </div>
      <button type="submit" className="submit-button">
        Hazırdır
      </button>
    </form>
  );
}

export default Createtest;
