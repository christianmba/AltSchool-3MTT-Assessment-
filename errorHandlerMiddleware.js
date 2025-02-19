const logger = require('../utils/logger');

const errorHandlerMiddleware = (err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandlerMiddleware;