export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super();

    //Because this class is extends from a built-in class 'Error'
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ];
  }
}