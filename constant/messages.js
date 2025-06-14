const messages = {
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
    token: {
      auth_invalid_token: "Invalid token",
      auth_token_missing: "Token is missing",
    },
    user: {
      user_not_found: "User not found",
    },
    job_config: {
      form_not_found: "Form not found",
      get_form_list: "Form list fetched successfully",
      config_field_not_found: "Config Fields not found",
      get_field_list: "Config Fields list fetched successfully",
      sub_section_not_found: "Sub Section data not found",
      sub_section_field_not_found: "Sub Section field data not found",
      sub_section_field_option_not_found:
        "Sub Section field option data not found",
      custom_field_data_not_found: "Custom Field data not found",
      custom_field_key_exists:
        " Label name already in use please try another one",
      field_id_required: "Field ID is required",
      invalid_field: "Invalid fieldId",
      grid_group_required: "Grid group is required",
      invalid_grid_group: "Invalid grid_group",
      sort_order_is_required: "Sort order is required",
      invalid_sort_order: "Invalid sort_order",
      field_id_not_found: "Field ID not found",
      job_configuration_updated_successfully:
        "Job configuration updated successfully",
      failed_to_get_job_config_data: "Failed to get job configuration data",
    },
    drop_down: {
      drop_down_list_fetched_successfully:
        "Drop down list fetched successfully",
    },
  },
};

export default messages;
