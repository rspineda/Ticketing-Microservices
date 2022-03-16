export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor() {
    super();

    //Because this class extends from a built-in class 'Error'
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[]
}