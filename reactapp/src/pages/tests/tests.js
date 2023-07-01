import { Link, Navigate, createSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./tests.css";

function Tests() {
  const [tests, setTests] = useState([]);
  const loggedIn = useSelector((state) => state.login);
  const userClass = useSelector((state) => state.class.class);
  
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!loggedIn) return <Navigate to="/" />;
  if (loggedIn === "TEACHER") return <Navigate to="/" />;
  if (!tests) return <>Zəhmət Olmasa Gözləyin</>;

  // Filter tests based on the user's class
  const filteredTests = tests.filter((test) => test.CLASS === userClass);

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
              <p>{test.CLASS}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tests;
