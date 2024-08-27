import { useState, useEffect } from "react";
import { Octokit } from "octokit";

const useRepos = () => {
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

  return repos;
};

export default useRepos;
