import type { Express } from "express";
import { housesApi } from "../pods/houses/houses.rest-api";

export const registerRoutes = (app: Express) => {
  // Aquí registramos cada pod
  app.use("/api/houses", housesApi);
};
