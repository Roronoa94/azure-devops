export class AzureHelper {
  constructor(opts) {
    this.client = opts.azureClient;
    this.logger = opts.logger(module);
  }

  async getCommits(repository, userName, project) {
    let connection = await this.client.getConnection();
    let currentDate = new Date();
    let params = {
      fromDate: new Date(currentDate.setDate(currentDate.getDate() - 10)).toISOString(),
      user: userName
    };
    let build = await connection.getGitApi();
    return await build.getCommits(repository, params, project);
  }

  async getPullRequests(repository, userName, project) {
    let connection = await this.client.getConnection();
    let params = {
      creatorId: userName
    };
    let build = await connection.getGitApi();
    return await build.getPullRequests(repository, params, project);
  }

  async getRepositoriesList(project) {
    let connection = await this.client.getConnection();
    let build = await connection.getGitApi();
    return await build.getRepositories(project, false, false, true);
  }
}
