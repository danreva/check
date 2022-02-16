
import {
    failure,
    forbidden,
    bad_request,
    not_found,
    unauthorized,
} from "./res.js";
import { ValidationError } from "./error.js"

export async function log_error(e) {
    console.error(e);
    let errors;
    if (e.response) {
        if (e.response.status === 400) {
            // eslint-disable-next-line no-prototype-builtins
            if (e.response.data.hasOwnProperty("validationError")) {
                console.log(e.response.data.validationError);
                return bad_request({
                    message: e.response.data.validationError[0].message || e,
                });
            }
            return bad_request({
                message: e.response.data.message || e
            });
        }
        if (
            e.response.status === 401 ||
            e.response.status === 403 ||
            e.response.status === 404 ||
            e.response.status === 409 ||
            e.response.status === 429
        ) {
            // console.log(e.response.data.validationError);
            return bad_request({
                message: e.response.data.message || e
            });
        }
    }
    if (e.name === "BannedUserError")
        return forbidden({
            message: e.message || e
        });
    if (e.name === "ValidationError")
        return bad_request({
            message: e.message || e
        });
    if (e.name === "ItemNotFoundError")
        return not_found({
            message: e.message || e
        });
    if (e.name === "Unauthorized")
        return unauthorized({
            message: e.message || e
        });
    if (e.errors) errors = e.errors;
    return failure({
        message: e.message || e,
        errors
    });
}

export async function get_content_type(headers) {
    return headers;
}

export const validate_joi_result = (result) => {
    if (result.error) {
        throw new ValidationError(result.error.details[0].message);
    }
    return true;
}

