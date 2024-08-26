import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";

function App() {
  //variable to store list of projects, won't be cleared on rerender
  //inside const brackets, place <list name>, <setter function name from end of useEffect>
  const [] = useState([]);
  useEffect(() => {
    //logic for fetching GitHub Projects
    //this will only run on initial pageload since brackets are empty
  }, []);
  return (
    <Router>
      <div className="container">
        <Header subtitle="Software Developer Hayden Carpenter's Website" />

        <Switch>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
