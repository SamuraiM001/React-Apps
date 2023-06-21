import React ,{useEffect,useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardList from "./lister";
import BuyPage from './buy'; // Import the BuyPage component


import "./App.css";


const App = () => {
  const [data,setData] = useState([{}])
  useEffect(() => {
    fetch('http://127.0.0.1:5000/get')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="cnt">
    <Router>
      <div className="card-container">
        <Switch>
          <Route exact path="/">
            <CardList cards={data} />
          </Route>
          <Route path="/buy/:name" component={BuyPage} />
        </Switch>
      </div>
    </Router>
      </div>
  );
};

export default App;
