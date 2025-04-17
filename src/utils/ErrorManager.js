import { errors } from "../data.js"

export const findError = (errorCode) => {
    return errors.find(error => error.id === errorCode)
}