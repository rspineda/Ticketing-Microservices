import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    //Because this class is extends from a built-in class 'Error'
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}