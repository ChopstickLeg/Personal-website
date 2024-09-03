import Repo from "../github-repos";
const Repos = ({ repositories }) => {
  if (repositories)
    return (
      <div>
        <div className="row githubRepos">
          <h3 className="col-md-12 text-center">My public GitHub repos</h3>
          <div>
            <Repo repositories={{ repositories }} />
          </div>
        </div>
      </div>
    );
  return <div>I do not have any public GitHub repos at this time</div>;
};

export default Repos;
