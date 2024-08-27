import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./main-page.css";
import AboutMe from "./aboutme";
import Header from "./header";
import NavigationBar from "./navbar";
import useRepos from "../hooks/useRepos";

function App() {
  //eslint-disable-next-line
  const allRepos = useRepos();
  return (
    <Router>
      <div className="container">
        <Header subtitle="Software Developer Hayden Carpenter's Website" />
        <NavigationBar />
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/home"></Route>
          <Route path="/">
            <Redirect to="/about" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
