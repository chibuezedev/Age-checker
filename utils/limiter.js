const { rateLimit } = require("express-rate-limit");

//request limiter function
const limitRequest = rateLimit({
    windowMs: 1000,
    max: 3,
    message: "Try again after one second",
    statusCode: 429
  });

  module.exports = limitRequest;