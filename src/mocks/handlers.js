import { http, HttpResponse } from "msw"
import { getRobotSimulationData } from "./robotSimulationData"

export const handlers = [
  http.get("/robots/status", () => {
    return HttpResponse.json(getRobotSimulationData())
  }),
]