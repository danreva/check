function build_response(statusCode, body) {
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Cache-Control",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(body),
    };
}

export function success(body) {
    return build_response(200, body);
}

export function success_with_resource(body) {
    return build_response(201, body);
}

export function forbidden(body) {
    return build_response(403, body);
}

export function unauthorized(body) {
    return build_response(401, body);
}

export function bad_request(body) {
    return build_response(400, body);
}

export function not_found(body) {
    return build_response(404, body);
}

export function failure(body) {
    return build_response(500, body);
}