import { Review } from "../../pods/houses/houses.api-model";

export interface HouseMock {
  id: string;
  title: string;
  country: string;
  pictureUrl: string;
  description: string;
  address: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  lastReviews: Review[];
}

export const HOUSES_MOCK: HouseMock[] = [
  {
    id: "1",
    title: "Cozy Loft",
    country: "Spain",
    pictureUrl: "https://picsum.photos/seed/house1/600/400",
    description: "Loft en el centro de la ciudad",
    address: "Calle Mayor 123, Valencia",
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    lastReviews: [
      { author: "Ana", comment: "Estancia genial", date: "2025-01-10T10:00:00.000Z" },
      { author: "Luis", comment: "Muy limpio", date: "2025-01-05T12:00:00.000Z" },
    ],
  },
  {
    id: "2",
    title: "Mountain Cabin",
    country: "Italy",
    pictureUrl: "https://picsum.photos/seed/house2/600/400",
    description: "Cabaña con vistas increíbles",
    address: "Via Bosco 5, Trentino",
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    lastReviews: [],
  },
  {
    id: "3",
    title: "Charming Flat",
    country: "France",
    pictureUrl: "https://picsum.photos/seed/house3/600/400",
    description: "Piso con encanto en el Marais",
    address: "Rue Vieille du Temple 45, Paris",
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    lastReviews: [{ author: "Claire", comment: "Ubicación TOP", date: "2025-02-12T09:30:00.000Z" }],
  },
  {
    id: "4",
    title: "Modern Studio",
    country: "Spain",
    pictureUrl: "https://picsum.photos/seed/house4/600/400",
    description: "Estudio moderno cerca de la playa",
    address: "Passeig de Gràcia 20, Barcelona",
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    lastReviews: [],
  },
  {
    id: "5",
    title: "Countryside House",
    country: "Italy",
    pictureUrl: "https://picsum.photos/seed/house5/600/400",
    description: "Casa rural rodeada de viñedos",
    address: "Strada del Vino 8, Toscana",
    bedrooms: 4,
    beds: 5,
    bathrooms: 2,
    lastReviews: [{ author: "Marco", comment: "Tranquilidad absoluta", date: "2025-03-01T18:00:00.000Z" }],
  },
  {
    id: "6",
    title: "City View Apartment",
    country: "USA",
    pictureUrl: "https://picsum.photos/seed/house6/600/400",
    description: "Apartamento con vistas a Manhattan",
    address: "5th Ave 350, New York",
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    lastReviews: [],
  },
  {
    id: "7",
    title: "Traditional Ryokan",
    country: "Japan",
    pictureUrl: "https://picsum.photos/seed/house7/600/400",
    description: "Ryokan tradicional con onsen",
    address: "Gion, Kyoto",
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    lastReviews: [{ author: "Yuki", comment: "Experiencia auténtica", date: "2025-02-22T08:00:00.000Z" }],
  },
  {
    id: "8",
    title: "Beach House",
    country: "Spain",
    pictureUrl: "https://picsum.photos/seed/house8/600/400",
    description: "Casa a pie de playa",
    address: "Av. del Atlántico 12, Cádiz",
    bedrooms: 3,
    beds: 5,
    bathrooms: 2,
    lastReviews: [],
  },
  {
    id: "9",
    title: "Lake Cottage",
    country: "USA",
    pictureUrl: "https://picsum.photos/seed/house9/600/400",
    description: "Cabaña junto al lago",
    address: "Lakeview Rd 77, Michigan",
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    lastReviews: [{ author: "John", comment: "Puesta de sol espectacular", date: "2025-01-20T19:45:00.000Z" }],
  },
  {
    id: "10",
    title: "Alpine Chalet",
    country: "France",
    pictureUrl: "https://picsum.photos/seed/house10/600/400",
    description: "Chalet alpino para esquiadores",
    address: "Route des Pistes 9, Chamonix",
    bedrooms: 5,
    beds: 7,
    bathrooms: 3,
    lastReviews: [],
  },
];
