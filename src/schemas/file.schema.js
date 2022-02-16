import Joi from "joi";
import {
    validate_joi_result,
} from "../libs/utils.js";


export const validate_media = (body) => {
    const result = Joi.object({
        files: Joi.array().items(Joi.object({
            name: Joi.string().min(2).max(50).required().messages({
                "string.base": `"File Name" should be a type of 'text'`,
                "string.empty": `"File Name" cannot be an empty field`,
                "any.required": `"File Name" is a required field`,
                "string.min": `"File Name" should have a minimum length of 2`,
                "string.max": `"File Name" should have a maximum length of 25`,
            }),
        }))
    }).validate(body);
    validate_joi_result(result);
}