class OrganizationsList extends React.Component {
  reposForOrg(org) {
    if ( _.has(org, "id") ) {
      return _.filter(this.props.repos, (repo) => {
        return repo.owner.id === org.id;
      });
    } else {
      return _.filter(this.props.repos, (repo) => {
        return this.orgName(repo.full_github_name) === org.name;
      });
    }
  }

  orgName(full_github_name) {
    return _.split(full_github_name, "/")[0];
  }

  render() {
    const {
      repos,
      onRepoClicked,
      filterTerm,
      isProcessingId,
      organizations,
    } = this.props;

    return (
      <ul className="organizations">
        {organizations.map( (org) => (
          <Organization
            data={org}
            key={org.id || org.name}
            repos={(repos && this.reposForOrg(org)) || null}
            onRepoClicked={onRepoClicked}
            filterTerm={filterTerm}
            isProcessingId={isProcessingId}
          />
        ))}
      </ul>
    );
  }
}
