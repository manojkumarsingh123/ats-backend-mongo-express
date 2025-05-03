module.exports = {
  status: {
    create: 201,
    success: 200,
    error: 500,
    not_registered: 401,
    unauthorized: 401,
    not_found: 404,
    user_failed_credential: 401,
    exist: 409,
    bad_request: 400,
    internal_server_error: 500,
  },
  messages: {
    success: "Success",
    bad_request: "Bad Request",
    un_authorized: "Unauthorized Request",
    not_found: "Not Found",
    internal_server_error: "Internal server Error",
    server_error: "Server Error",
    login: {
      login_success: "Login successfully",
      email_exist: "Email already exist",
      invalid_email_password: "Invalid Email Or Password",
    },
    user: {
      user_not_found: "User not found",
    },
  },
};
