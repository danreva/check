import AWS from "aws-sdk";
import { log_error } from '../../libs/utils.js';
import { success } from '../../libs/res.js';

// eslint-disable-next-line no-undef
AWS.config.update({ region: process.env.AWS_REGION });
AWS.config.correctClockSkew = true;

export async function sign_up(event, context, callback) {

    try {
        const body = JSON.parse(event.body);
        if (body) {
            console.log('Body', body)
        }
        return success({
            message: "Ok",
            ...body
        })
    } catch (error) {
        return log_error(error);
    }

}