// middleware reusable Joi validation handler

/**
This middleware is a reusable Joi validation handler for incoming HTTP request bodies. It ensures that the data in req.body matches the expected schema before the request reaches the route's controller logic.

const validate = (schema) => {
This is a higher-order function — it takes a Joi schema as an argument and returns a middleware function.

You use it like this in a route:

router.post("/register", validate(registerSchema), registerUser);

  return (req, res, next) => {
This returned function is a standard Express middleware function with the req, res, and next parameters.

It intercepts the request before reaching the final controller.

    const { error } = schema.validate(req.body);
It uses the provided Joi schema to validate req.body.

If the body does not match the schema, error will be an object containing details about the validation failure.

    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.details[0].message,
      });
    }
If there's a validation error:

It immediately stops the request from going further.

It returns a 400 (Bad Request) response with a descriptive message from Joi's error object.

    next();
  };
If there's no validation error, the middleware calls next(), which passes control to the next middleware or the controller function (e.g., registerUser).



 */

const Res = require("../constant/messages");
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        code: Res.status.bad_request,
        message: error.details[0].message,
      });
    }
    next();
  };
};

module.exports = validate;
