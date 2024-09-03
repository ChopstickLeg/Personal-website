const RepoRow = ({ repo }) => {
  return (
    <tr>
      <td>{repo.name}</td>
      <td>
        <a target="_blank" href={repo.html_url}>
          Link to repo
        </a>
      </td>
      <td>{repo.description}</td>
    </tr>
  );
};

export default RepoRow;