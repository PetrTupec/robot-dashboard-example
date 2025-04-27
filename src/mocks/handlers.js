import { http, HttpResponse } from "msw"
import { getRobotSimulationData } from "./robotSimulationData"
import { getErrorById } from "../utils/errorManager"

export const handlers = [
  http.get("/robots/status", () => {
    return HttpResponse.json(getRobotSimulationData())
  }),

  http.get("/errors/:id", ({ params }) => {
    return HttpResponse.json(getErrorById(params))
  })
]