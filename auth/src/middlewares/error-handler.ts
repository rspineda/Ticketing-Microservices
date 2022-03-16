import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: Error, 
	req: Request, 
	res: Response, 
	next: NextFunction
) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).send({ errors: err.serializeErrors() });
	}

	res.status(400).send({ errors: [{ message: 'Something went wrong' }]});
};

/* 
Common response structurure that will be sent our from any server
{
	errors: {
		message: string, field?: string
	}[]
}
*/