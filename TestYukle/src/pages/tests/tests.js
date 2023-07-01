import { Link, Navigate, createSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./tests.css";

function Tests() {
  const [tests, setTests] = useState([]);
  const [filteredTests, setFilteredTests] = useState([]);
  const loggedIn = useSelector((state) => state.login);
  const userClass = localStorage.getItem("Name");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/tests");
      if (!response.ok) {
        console.error("Error fetching data");
      } else {
        const data = await response.json();
        setTests(data);
        filterTests(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterTests = (data) => {
    if (loggedIn === "TEACHER") {
      setFilteredTests(data);
    } else {
      const filtered = data.filter((test) => test.Author === userClass);
      setFilteredTests(filtered);
    }
  };

  if (!loggedIn) return <Navigate to="/" />;
  if (!tests) return <>Zəhmət Olmasa Gözləyin</>;

  return (
    <div className="grid-container">
      <div className="grid">
        {filteredTests.map((test) => (
          <Link
            key={test.id}
            to={{
              pathname: "/testsolver",
              search: createSearchParams({
                id: test.id,
              }).toString(),
            }}
            className="card-button"
          >
            <div className="card-content">
              <h3>{test.TESTNAME}</h3>
              <p>{test.Author}</p>
              <h3>{test.CLASS}</h3>
              <p>{test.Subject}</p>
              <h3>{test.DIFFICULTY}</h3>
            </div>
          </Link>
        ))}
      </div>
      {loggedIn !== "TEACHER" && (
        <Link className="end-tests-button" to={"/createtest"}>
          Test önərmək
        </Link>
      )}
    </div>
  );
}

export default Tests;
