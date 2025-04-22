import { errors } from "../data.js"

export const findError = (errorCode) => {
    return errors.find(error => error.id === errorCode) ??
    {
        id: errorCode,
        message: { en: "Error code not found" },
        cause: { en: "" },
        solution: { en: "" }
    }
}