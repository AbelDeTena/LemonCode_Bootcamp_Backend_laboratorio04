export interface HouseSummary {
  id: string;
  title: string;
  country: string;
  pictureUrl: string;
}

export interface Review {
  author: string;
  comment: string;
  date: string;
}

export interface HouseDetail {
  id: string;
  title: string;
  pictureUrl: string;
  description: string;
  address: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  lastReviews: Review[];
}
