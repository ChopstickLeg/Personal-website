const RepoRow = ({ repo }) => {
  return (
    <tr>
      <td>{repo.name}</td>
      <td>{repo.html_url}</td>
      <td>{repo.description}</td>
    </tr>
  );
};

export default RepoRow;
