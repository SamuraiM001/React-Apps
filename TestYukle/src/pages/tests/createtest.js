import React, { useState } from "react";
import "./createtest.css";

function Createtest() {
  const [formFields, setFormFields] = useState([]);

  const handleAddFields = () => {
    const newFieldSet = {
      input1: "",
      input2: "",
      selectedOption: ""
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
    const { value } = event.target;
    const updatedFields = [...formFields];
    updatedFields[index].selectedOption = value;
    setFormFields(updatedFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allFields = 
    {
      Author:"Zenfira Əsgərova",
      TESTNAME: "TEST2",
      CLASS: "5",
      DIFFICULTY:"Çətin",
      QUESTIONS:formFields.map((fields, index) => ({
      QUESTION: fields[`input1_${index}`],
      ANSWERS: fields[`input2_${index}`],
      SCORE: fields[`selectedOption_${index}`]
    }))};
    console.log(allFields);
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <div className="card">
        <div className="form-group">
          <label>
            Sinif:
            <input type="text" className="form-input" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Mövzu:
            <input type="text" className="form-input" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Çətinlik:
            <select className="form-input">
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
                name={`input1_${index}`}
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
                name={`input2_${index}`}
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
                name={`selectedOption_${index}`}
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
          Add Fields
        </button>
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default Createtest;
