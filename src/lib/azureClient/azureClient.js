import * as azdev from 'azure-devops-node-api';

export class AzureClient {
  constructor(opts) {
    this.connection = null;
    this.logger = opts.logger(module);
  }

  establishConnection() {
    return new Promise((resolve, reject) => {
      let orgUrl = process.env.AZURE_ORGANIZATION_URL;
      let authHandler = azdev.getPersonalAccessTokenHandler(process.env.AZURE_PERSONAL_ACCESS_TOKEN);
      this.connection = new azdev.WebApi(orgUrl, authHandler);
      this.logger.debug('Azure connection established');
      resolve(this.connection);
    });
  }

  async getConnection() {
    if (!this.connection) {
      await this.establishConnection();
    }
    return this.connection;
  }
}
