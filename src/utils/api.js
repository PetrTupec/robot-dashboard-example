import { getRobotSimulationData } from "../mocks/robotSimulationData"
import { getErrorById } from "../utils/errorManager"

const fetchData = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`)
            return response.json()
        })
}

const fakeData = (url) =>
    new Promise((resolve, reject) => {
        if (url === "/robots/status") return resolve(getRobotSimulationData())
        if (url.startsWith("/errors/")) {
            const id = url.split("/errors/")[1]
            return resolve(getErrorById({ id }))
        }
        reject(new Error("No mock response for URL: " + url))
    })

export const apiGet = (url) => {
    const apiMode = process.env.REACT_APP_API_MODE
    if (apiMode === "msw" || apiMode === "server") {
        return fetchData(url)
    } else {
        return fakeData(url)
    }
}