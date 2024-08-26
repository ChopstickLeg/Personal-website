import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Octokit } from "octokit";
import "./main-page.css";
import AboutMe from "./aboutme";
import Header from "./header";
import NavigationBar from "./navbar";

function App() {
  // eslint-disable-next-line
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const getRepos = async () => {
      const octokit = new Octokit({});
      const gitRepos = await octokit.paginate("GET /users/{username}/repos", {
        username: "ChopstickLeg",
      });
      setRepos(gitRepos);
      console.log(gitRepos);
    };
    getRepos();
  }, []);
  return (
    <Router>
      <div className="container">
        <Header subtitle="Software Developer Hayden Carpenter's Website" />
        <NavigationBar />
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
