export type CollegeType = {
  image: string;
  logo: string;
  status: string;
  type: string;
  rating: number;
  name: string;
  location: string;
  programs: string[];
  facilities: string[];
};

export type EventType = {
  image: string;
  date: string;
  title: string;
  description: string;
  isWishlist: boolean
};