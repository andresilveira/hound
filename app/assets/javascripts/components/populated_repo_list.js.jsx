class PopulatedRepoList extends React.Component {
  canShow(repo) {
    const { filterTerm } = this.props;

    if (filterTerm == null) { return true; }

    const repoName = repo.full_github_name.toLowerCase();
    return repoName.indexOf(filterTerm.toLowerCase()) !== -1;
  }

  render() {
    const { repos, onRepoClicked, isProcessingId } = this.props;

    return (
      <ul className="repos">
        {repos.filter(repo => this.canShow(repo)).map( (repo) => (
          <Repo
            repo={repo}
            key={repo.id}
            onRepoClicked={onRepoClicked}
            isProcessingId={isProcessingId}
          />
        ))}
      </ul>
    );
  }
}
