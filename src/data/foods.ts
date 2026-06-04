import type { Food } from "../types/food";
import UgaliKuku from "../assets/ugalikuku.jpeg";
import WaliSamaki from "../assets/walisamaki.jpeg";
import WaliMaharage from "../assets/waliharage.jpeg";
import ChipsiYai from "../assets/chipsi.jpeg";


export const foods: Food[] = [
  {
    id: 1,
    name: "Wali-Samaki",
    description: "A delicious dish of rice and fish, seasoned with spices and herbs.",
    price: 15000 ,
    image: WaliSamaki,
  },
  {
    id: 2,
    name: "Ugali-Kuku", 
    description: "A traditional Tanzanian dish served with chicken stew.", 
    price: 12000,
    image:UgaliKuku,
  },
  {
    id: 3,
    name: "Wali-Maharage",
    description:"A delicious dish of Rice with Beans,seasoned with spices and herbs. ",
    price: 5000,
    image: WaliMaharage,
    
  },  
  {
    id: 4,
    name: " Chipsi Mayai",
    description:"A Delicious food of fried Potatoes with eggs ",
    price: 6000,
    image: ChipsiYai,
  }


];
    