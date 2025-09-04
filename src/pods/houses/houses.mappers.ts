import { HouseDetail, HouseSummary, Review } from "./houses.api-model";

export const toHouseSummary = (raw: any): HouseSummary => ({
  id: String(raw.id),
  title: raw.title,
  country: raw.country,
  pictureUrl: raw.pictureUrl,
});

export const toHouseDetail = (raw: any): HouseDetail => ({
  id: String(raw.id),
  title: raw.title,
  pictureUrl: raw.pictureUrl,
  description: raw.description,
  address: raw.address,
  bedrooms: raw.bedrooms,
  beds: raw.beds,
  bathrooms: raw.bathrooms,
  lastReviews: (raw.lastReviews ?? []) as Review[],
});
