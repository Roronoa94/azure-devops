export class Controller {
  constructor(opts) {
    this.service = opts.service;
    this.logger = opts.logger(module);
    this.getRepositoryInfo = this.getRepositoryInfo.bind(this);
  }

  getRepositoryInfo(req, res) {
    this.logger.debug('Controller Layer Called');
    let params = {
      user: req.query.userName,
      repo: req.query.repository,
      search: req.query.searchCriteria
    };
    return this.service.getRepositoryInfo(params.repo, params.user, req.search || 'null')
      .then((data) => {
        this.logger.debug(data);
        return res.status(200).send(data);
      })
      .catch((error) => {
        this.logger.debug(error);
        return res.status(400).send(error);
      });
  }
}
