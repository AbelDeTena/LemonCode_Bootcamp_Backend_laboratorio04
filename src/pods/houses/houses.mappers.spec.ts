import { describe, it, expect } from "vitest";
import { mapHouseFromModelToApiSummary, mapHouseFromModelToApiDetail } from "./houses.mappers";
import { DbHouse } from "../../dals/houses/houses.db-model";

const sample: DbHouse = {
  _id: "10006546",
  name: "Cozy Loft in City Center",
  beds: 2,
  bedrooms: 1,
  bathrooms: 1,
  images: { picture_url: "https://img" },
  address: { street: "Calle Mayor 123", country: "Spain" },
  description: "Nice loft close to everything.",
  reviews: [
    { date: "2024-01-05", reviewer_name: "Luis", comments: "Ubicación perfecta." },
    { date: "2024-02-10", reviewer_name: "Ana", comments: "Muy limpio." },
  ],
};

describe("houses.mappers", () => {
  it("mapHouseFromModelToApiSummary maps fields correctly", () => {
    const result = mapHouseFromModelToApiSummary(sample);
    expect(result).toEqual({
      id: "10006546",
      title: "Cozy Loft in City Center",
      country: "Spain",
      pictureUrl: "https://img",
    });
  });

  it("mapHouseFromModelToApiDetail maps fields and last 5 reviews", () => {
    const result = mapHouseFromModelToApiDetail(sample);

    expect(result).toMatchObject({
      id: "10006546",
      title: "Cozy Loft in City Center",
      pictureUrl: "https://img",
      description: "Nice loft close to everything.",
      address: "Calle Mayor 123",
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
    });

    // Validar reviews
    expect(result.lastReviews.length).toBeLessThanOrEqual(5);
    expect(result.lastReviews[0].author).toBe("Ana"); // la más reciente debe ir primero
  });
});
