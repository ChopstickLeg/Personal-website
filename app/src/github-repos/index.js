import { RepoRow } from "./repo-row";

const Repo = ({ repositories }) => {
  return (
    <div className="mt-2">
      <table className="table table-hover">
        <tbody>
          {repositories.map((r) => (
            <RepoRow key={r.id} repo={r} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Repo;
