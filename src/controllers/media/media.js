import AWS from "aws-sdk";
import { log_error } from '../../libs/utils.js';
import { success } from '../../libs/res.js';
import { validate_media } from "../../schemas/file.schema.js";


export async function getS3SignedURL(event) {

    try {
        const body = JSON.parse(event.body);
        if (body) {
            validate_media(body);
            return success({
                message: 'Ok'
            })
        } else {
            return log_error({
                error: "Payload is empty for this request.",
            })
        }
        
    } catch (error) {
        console.log('error', error);
        return log_error(error);
    }

}