export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Mount Everest Base Camp",
    description: "Journey to the foot of the world's highest peak, where adventure meets breathtaking views.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
    location: "Solukhumbu District"
  },
  {
    id: 2,
    name: "Phewa Lake",
    description: "A serene lake offering perfect reflections of the Annapurna range and peaceful boat rides.",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    location: "Pokhara"
  },
  {
    id: 3,
    name: "Lumbini",
    description: "The sacred birthplace of Lord Buddha, featuring ancient monasteries and peaceful gardens.",
    image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1",
    location: "Rupandehi District"
  },
  {
    id: 4,
    name: "Annapurna Circuit",
    description: "One of the world's most dramatic hiking trails through diverse landscapes and cultures.",
    image: "https://images.unsplash.com/photo-1544735716-80e5c9c94f9d",
    location: "Manang & Mustang Districts"
  }
];