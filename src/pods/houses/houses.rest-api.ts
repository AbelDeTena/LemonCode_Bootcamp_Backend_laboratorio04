import { Router } from "express";
import { toHouseSummary, toHouseDetail } from "./houses.mappers";
import { Review } from "./houses.api-model";
import { HOUSES_MOCK } from "../../dals/houses/houses.mock";

export const housesApi = Router();

let HOUSES = [...HOUSES_MOCK];

// GET /api/houses
// GET /api/houses?country=Spain&page=1&pageSize=10
housesApi.get("/", (req, res) => {
  const country = String(req.query.country ?? "").trim().toLowerCase();
  const page = Math.max(1, Number(req.query.page ?? 1));
  const pageSize = Math.max(1, Number(req.query.pageSize ?? 10));

  let filtered = HOUSES;
  if (country) {
    filtered = filtered.filter(h => h.country.toLowerCase() === country);
  }

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize).map(toHouseSummary);

  res.json({ items, total, page, pageSize });
});


// GET /api/houses/:id
housesApi.get("/:id", (req, res) => {
  const house = HOUSES.find((h) => h.id === req.params.id);
  if (!house) return res.status(404).json({ message: "House not found" });
  res.json(toHouseDetail(house));
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

  const house = HOUSES.find(h => h.id === req.params.id);
  if (!house) return res.status(404).json({ message: "House not found" });

  const review = {
    author: author.trim(),
    comment: comment.trim(),
    date: new Date().toISOString(), // fecha automática
  };

  // Insertamos la nueva review al principio y capamos a 5
  house.lastReviews = [review, ...(house.lastReviews ?? [])].slice(0, 5);

  return res.status(201).json(review);
});
