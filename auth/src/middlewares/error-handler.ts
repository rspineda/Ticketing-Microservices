import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (
  err: Error, 
	req: Request, 
	res: Response, 
	next: NextFunction
) => {
	if (err instanceof RequestValidationError) {
		const formattedErrors = err.errors.map(error => {
			return { messsage: error.msg, field: error.param}
		});
		return res.status(400).send({ errors: formattedErrors });
	}

	if (err instanceof DatabaseConnectionError) {
		console.log('handling this erro as a db connection error');
	}


	res.status(400).send({ message: err.message });
};

/* 
Common response structurure that will be sent our from any server
{
	errors: {
		message: string, field?: string
	}[]
}
*/