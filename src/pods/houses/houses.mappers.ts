import { HouseSummary, HouseDetail, Review } from "./houses.api-model";
import { DbHouse } from "../../dals/houses/houses.db-model";

const getString = (v: unknown, fallback = "") =>
  (typeof v === "string" && v) || fallback;

const getNumber = (v: unknown, fallback = 0) =>
  (typeof v === "number" && v) || fallback;

const toIso = (d: unknown): string => {
  if (d instanceof Date) return d.toISOString();
  if (typeof d === "string") return new Date(d).toISOString();
  return new Date(0).toISOString();
};

// SUMMARY
export const mapHouseFromModelToApiSummary = (doc: DbHouse): HouseSummary => ({
  id: getString(doc._id),
  title: getString(doc.name),
  country: getString(doc.address?.country),
  pictureUrl: getString(doc.images?.picture_url),
});

// DETAIL
export const mapHouseFromModelToApiDetail = (doc: DbHouse): HouseDetail => {
  const lastReviews: Review[] = (doc.reviews ?? [])
    .slice(-5)                 // coge las 5 últimas
    .reverse()                 // de más reciente a más antigua
    .map(r => ({
      author: getString(r.reviewer_name),
      comment: getString(r.comments),
      date: toIso(r.date),
    }));

  return {
    id: getString(doc._id),
    title: getString(doc.name),
    pictureUrl: getString(doc.images?.picture_url),
    description: getString(doc.description),
    address: getString(doc.address?.street),
    bedrooms: getNumber(doc.bedrooms),
    beds: getNumber(doc.beds),
    bathrooms: getNumber(doc.bathrooms),
    lastReviews,
  };
};
