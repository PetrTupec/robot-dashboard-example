import { errors } from "../data.js"

export const findError = (errorCode) => {
    const error = errors.find(error => error.id == errorCode.id)
    return error ?? {
        id: errorCode,
        message: { en: "Error code not found" },
        cause: { en: "" },
        solution: { en: "" }
    }
}