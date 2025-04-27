import { errors } from "../data.js"

export const getErrorById = ({ id }) => {
    const error = errors.find(error => error.id === id)
    return error ?? {
        id: id,
        message: { en: "Error code not found" },
        cause: { en: "-" },
        solution: { en: "-" }
    }
}

export const createErrorTitle = (robotError, data) => {
    return `${robotError.code} - 
    ${data.id === "EX190"
            ? `HOLD: ${robotError.subMessage}`
            : `${data.message.en} ${robotError.subMessage}`}`
}


export const createErrorMessage = (data) => {
    return [
        `Message:\n${data.message?.en ?? "-"}`,
        `Cause:\n${data.cause?.en ?? "-"}`,
        `Solution:\n${data.solution?.en ?? "-"}`
    ].join("\n\n")
}