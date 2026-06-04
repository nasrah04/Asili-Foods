// src/types/food.ts
export type Food = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "rice" | "ugali" | "snacks"  | "other";
  featured: boolean;

  
}