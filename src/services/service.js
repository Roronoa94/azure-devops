const project = process.env.AZURE_PROJECT_NAME;

export class Service {
  constructor(opts) {
    this.azureHelper = opts.azureHelper;
    this.logger = opts.logger(module);
  }

  getRepositoryInfo(repository, userName, searchCriteria) {
    this.logger.debug('Service Layer Called');
    const data = {
      'getCommits': () => {
        return getCommitsFor.call(this, repository, userName);
      },
      'getPullRequests': () => {
        return getPullRequestsFor.call(this, repository, userName);
      },
      'getRepositories': () => {
        return getRepositoriesFor.call(this);
      },
      'default': () => {
        throw new Error('Invalid Search Criteria');
      }
    };
    return (data[searchCriteria] || data['default'])();
  }
}

function getCommitsFor(repository, userName) {
  return this.azureHelper.getCommits(repository, userName, project)
    .then((response) => { return response; })
    .catch((error) => { throw error; });
}

function getRepositoriesFor() {
  return this.azureHelper.getRepositoriesList(project)
    .then((response) => { return response; })
    .catch((error) => { throw error; });
}

function getPullRequestsFor(repository, userName) {
  return this.azureHelper.getPullRequests(repository, userName, project)
    .then((response) => { return response; })
    .catch((error) => { throw error; });
}
