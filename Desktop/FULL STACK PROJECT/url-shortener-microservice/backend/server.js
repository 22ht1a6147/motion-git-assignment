/**
 * Entry point for backend microservice
 * - mounts logging middleware (must use pre-test logging implementation)
 * - mounts routes and error handler
 *
 * TODO: Replace logging middleware import with your pre-test logging middleware implementation.
 */

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config/config');
const loggingMiddleware = require('./middleware/loggingMiddleware');
const errorHandler = require('./middleware/errorHandler');
const shorturlsRouter = require('./routes/shorturls');

const app = express();

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000' // frontend origin
}));
app.use(bodyParser.json({ limit: '1mb' }));

// IMPORTANT: Use your pre-test logging middleware here.
// The file included in this repo is a skeleton — replace internals with your pre-test provided logging code.
app.use(loggingMiddleware);

// Mount routes
app.use('/', shorturlsRouter);

// Centralized error handler (must send JSON and avoid console.log)
app.use(errorHandler);

// Start server
app.listen(config.PORT, () => {
  // IMPORTANT: Do not use console.log in exam code. Use logging middleware / logger instead.
  // If you need to log startup, call your logging middleware or logger API here.
});
