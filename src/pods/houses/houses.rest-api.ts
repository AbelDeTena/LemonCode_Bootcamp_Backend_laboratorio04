import { Router } from "express";
import { mapHouseFromModelToApiSummary, mapHouseFromModelToApiDetail } from "./houses.mappers";
import { HOUSES_MOCK } from "../../dals/houses/houses.mock";
import { DbHouse } from "../../dals/houses/houses.db-model";

export const housesApi = Router();

// Trabajamos en copia en memoria
let HOUSES: DbHouse[] = [...HOUSES_MOCK];

// GET /api/houses?country=Spain&page=1&pageSize=10
housesApi.get("/", (req, res) => {
  const country = String(req.query.country ?? "").trim().toLowerCase();
  const page = Math.max(1, Number(req.query.page ?? 1));
  const pageSize = Math.max(1, Number(req.query.pageSize ?? 10));

  let filtered = HOUSES;
  if (country) {
    filtered = filtered.filter(h => (h.address?.country ?? "").toLowerCase() === country);
  }

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize).map(mapHouseFromModelToApiSummary);

  res.json({ items, total, page, pageSize });
});

// GET /api/houses/:id
housesApi.get("/:id", (req, res) => {
  const house = HOUSES.find(h => h._id === req.params.id);
  if (!house) return res.status(404).json({ message: "House not found" });
  res.json(mapHouseFromModelToApiDetail(house));
});

// POST /api/houses/:id/reviews  { author, comment }
housesApi.post("/:id/reviews", (req, res) => {
  const { author, comment } = req.body ?? {};

  if (!author || typeof author !== "string" || !author.trim()) {
    return res.status(400).json({ message: "author is required" });
  }
  if (!comment || typeof comment !== "string" || !comment.trim()) {
    return res.status(400).json({ message: "comment is required" });
  }

  const house = HOUSES.find(h => h._id === req.params.id);
  if (!house) return res.status(404).json({ message: "House not found" });

  // Empujamos en forma DB
  const dbReview = {
    reviewer_name: author.trim(),
    comments: comment.trim(),
    date: new Date().toISOString(),
  };

  house.reviews = [dbReview, ...(house.reviews ?? [])]; // en DB no limitamos a 5

  // Respuesta en forma API (opcional: devolver lo posteado en API shape)
  return res.status(201).json({
    author: dbReview.reviewer_name,
    comment: dbReview.comments,
    date: dbReview.date,
  });
});
