export class DatabaseConnectionError extends Error {
  reason = 'Error connecting to database';

  constructor() {
    super();

    //Because this class is extends from a built-in class 'Error'
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}