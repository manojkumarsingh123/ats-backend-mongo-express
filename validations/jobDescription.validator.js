import Joi from "joi";

// add job description validation
export const addJobDescriptionSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
  }),
  description: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 3 characters",
  }),
});

// update job description validation
export const updateJobDescriptionSchema = Joi.object({
  name: Joi.string().min(3).max(30).messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
  }),
  description: Joi.string().min(3).max(30).messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 3 characters",
  }),
});

// update job description status validation
export const updateJobDescriptionStatusSchema = Joi.object({
  isActive: Joi.boolean().required().messages({
    "any.required": "Status (isActive) is required",
    "boolean.base": "Status must be true or false",
  }),
});
