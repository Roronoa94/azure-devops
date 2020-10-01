export class CustomError extends Error {
  constructor(message, customErrorCode, httpStatusCode) {
    super();
    this.message = message;
    this.name = this.constructor.name;
    this.status = httpStatusCode;
  }

  statusCode() {
    return this.status;
  }

  getErrorMessage() {
    return this.message;
  }
}
