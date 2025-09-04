import express from "express";
import { registerRoutes } from "../core/register-routes";

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.send("API Airbnb funcionando 🚀");
});

registerRoutes(app);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
