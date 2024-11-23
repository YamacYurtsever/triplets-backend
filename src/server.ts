// Packages
import express, { json, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Multifile
import config from './config.json';
import dataRouter from './routes/dataRoute';
import authRouter from './routes/authRoute';

// Setup server
const app = express();
const PORT: number = parseInt(process.env.PORT || config.port);
const HOST: string = process.env.IP || '127.0.0.1';

// Middleware
app.use(json()); // Enable access the JSON body of requests
app.use(cors()); // Enable access from other domains
app.use(morgan('dev')); // Log errors to stdout

// Routers
app.use('/data', dataRouter);
app.use('/auth', authRouter);

// Start server
const server = app.listen(PORT, HOST, () => {
  console.log(`⚡️ Server started on port ${PORT} at ${HOST}`);
});

// Handle signal interrupt
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Shutting down server');
    process.exit();
  });
});

export default app;
