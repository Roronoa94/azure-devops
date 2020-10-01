import { InternalServerError } from '../error/internalServerError';
import logger from '../lib/logger/logger';

module.exports.handleError = (err, req, res, next) => customErrorHandler(err, req, res, next);

function customErrorHandler(err, req, res, next) {
  logger(module).error(err.message);
  const internalServerError = new InternalServerError(err.message);
  return res.status(internalServerError.statusCode()).send(internalServerError.getErrorMessage());
}
