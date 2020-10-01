import { CustomError } from './customError';

export class InternalServerError extends CustomError {
  constructor(message) {
    super(message, 54, 500);
  }
}
