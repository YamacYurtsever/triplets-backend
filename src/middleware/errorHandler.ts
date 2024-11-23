import { Request, Response } from "express";

// Error handler middleware

const errorHandler = (err: Error, req: Request, res: Response) => {
  const statusCode = getStatusCode(err);
  res.status(statusCode).json({ error: err.message });
};

const getStatusCode = (err: Error): number => {
  if (err instanceof BadRequestError) return 400;
  else if (err instanceof AuthenticationError) return 401;
  else if (err instanceof AuthorizationError) return 403;
  else return 500;
}

// Custom error classes

class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

class AuthenticationError extends Error {
  constructor() {
    super('Authentication failed');
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

class AuthorizationError extends Error {
  constructor() {
    super('Unauthorized action');
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

export { BadRequestError, AuthenticationError, AuthorizationError, errorHandler };
