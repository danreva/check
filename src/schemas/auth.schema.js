import Joi from "joi";
import {
    validate_joi_result,
} from "../libs/utils";


export const validate_new_user = (body) => {

    const result = Joi.object({
        firstName: Joi.string().min(2).max(25).required().messages({
            "string.base": `"First Name" should be a type of 'text'`,
            "string.empty": `"First Name" cannot be an empty field`,
            "any.required": `"First Name" is a required field`,
            "string.min": `"First Name" should have a minimum length of 2`,
            "string.max": `"First Name" should have a maximum length of 25`,
        }),
        lastName: Joi.string().min(2).max(35).required().messages({
            "string.base": `"Last Name" should be a type of 'text'`,
            "string.empty": `"Last Name" cannot be an empty field`,
            "any.required": `"Last Name" is a required field`,
            "string.min": `"Last Name" should have a minimum length of 2`,
            "string.max": `"Last Name" should have a maximum length of 35`,
        }),
        email: Joi.string().email().required().messages({
            "string.base": `"Email" should be a type of 'text'`,
            "string.empty": `"Email" cannot be an empty field`,
            "any.required": `"Email" is a required field`,
            "string.email": `"Email" should be a valid email address`,
        }),
        password: Joi.string().min(10).max(32).required().messages({
            "string.base": `"Password" should be a type of 'text'`,
            "string.empty": `"Password" cannot be an empty field`,
            "any.required": `"Password" is a required field`,
            "string.min": `"Password" should have a minimum length of 10`,
            "string.max": `"Password" should have a maximum length of 32`,
        })
    }).validate(body);
    validate_joi_result(result);

}