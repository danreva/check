export class ValidationError extends Error {
    constructor(...args) {
        super(...args);
        this.name = "ValidationError";
        Error.captureStackTrace(this, ValidationError);
    }
}

export class ItemNotFoundError extends Error {
    constructor(...args) {
        super(...args);
        this.name = "ItemNotFoundError";
        Error.captureStackTrace(this, ItemNotFoundError);
    }
}

export class Unauthorized extends Error {
    constructor(...args) {
        super(...args);
        this.name = "Unauthorized";
        Error.captureStackTrace(this, Unauthorized);
    }
}