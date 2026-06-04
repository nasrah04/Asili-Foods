import type { Food } from "../types/food";
import UgaliKuku from "../assets/ugalikuku.jpeg";
import WaliSamaki from "../assets/walisamaki.jpeg";
import WaliMaharage from "../assets/waliharage.jpeg";
import ChipsiYai from "../assets/chipsi.jpeg";
import ndiziNyama from "../assets/ndizi.jpeg";
import pilau from "../assets/pilau.jpeg";
import ugaliSamaki from "../assets/ugalisamaki.png";
import ugaliDagaa from "../assets/ugalidagaa.png";
import vitumbua from "../assets/vitumbua.png";
import ugaliNyama from "../assets/ugalinyama.png";
import waliNyama from "../assets/walinyama.png";
import chipsiKavu from "../assets/chipsikavu.png"; 
import chapati from "../assets/chapati.png";
import sambusa from "../assets/sambusa.png";
import mishkaki from "../assets/mishikaki.png";
import mihogo from "../assets/mihogo.png";

export const foods: Food[] = [
  {
    id: 1,
    name: "Wali-Samaki",
    description: "A delicious dish of rice and fish, seasoned with spices and herbs.",
    price: 15000 ,
    image: WaliSamaki,
    featured: true,
    category: "rice",
  },
  {
    id: 2,
    name: "Ugali-Kuku", 
    description: "A traditional Tanzanian dish served with chicken stew.", 
    price: 12000,
    image:UgaliKuku,
    featured: true,
    category: "ugali",
  },
  {
    id: 3,
    name: "Wali-Maharage",
    description:"A delicious dish of Rice with Beans,seasoned with spices and herbs. ",
    price: 5000,
    image: WaliMaharage,
    featured: true,
    category: "rice",
    
  },  
  {
    id: 4,
    name: " Chipsi Mayai",
    description:"A Delicious food of fried Potatoes with eggs ",
    price: 6000,
    image: ChipsiYai,
    featured: true,
    category: "other",
  },

  {
    id: 5,
    name: "Pilau",
    description:"A flavorful rice dish cooked with spices, meat, and vegetables.",
    price: 10000,
    image: pilau,
    featured: false,
    category: "rice",

  },
  {
  id: 6,
  name:"Ugali-Samaki",
  description:"A traditional Tanzanian dish of maize porridge served with fish stew.",
  price: 12000,
  image: ugaliSamaki,
  featured: false,
  category: "ugali",
},

{
  id: 7,
  name:"Ugali-Dagaa",
description:"A traditional Tanzanian dish of maize porridge served with small dried fish.",
price: 4000,
image: ugaliDagaa,
featured: false,
category: "ugali",
},

{
  id: 8,
  name:"Ugali-Nyama",
description:"A traditional Tanzanian dish of maize porridge served with meat stew.",
price: 7000,
image: ugaliNyama,
featured: false,
category: "ugali",
},

{
  id: 9,
  name:"Wali-Nyama",
description:"A delicious dish of rice served with meat stew, seasoned with spices and herbs.",
price: 10000,
image: waliNyama,
featured: false,
category: "rice",
},

{
  id: 10,
  name:"Chapati",
description:"A popular flatbread in Tanzania, often served with various dishes.",
price: 3000,
image: chapati,
featured: false,
category: "snacks",
},

{
  id: 11,
  name:"Sambusa",
description:"A savory pastry filled with meat, vegetables, or lentils, commonly enjoyed as a snack.",
price: 2000,
image: sambusa,
featured: false,
category: "snacks",
},

{
  id: 12,
  name:"Mishkaki",
description:"Grilled skewers of marinated meat, often served with a spicy sauce.",
price: 8000,
image: mishkaki,
featured: false, 
category: "snacks", 
},
{
  id: 13, 
  name:"Mihogo",
description:"A traditional Tanzanian dish made from cassava, often served with a side of stew or sauce.",
price: 4000,
image: mihogo,
featured: false,
category: "snacks",
},

{
  id: 14,
  name:"Vitumbua",
description:"A popular Tanzanian snack made from rice flour and coconut milk, cooked in a special pan to create small, fluffy cakes.",
price: 3000,
image: vitumbua,
featured: false,
category: "snacks",
},

{
  id: 15,
  name: "Ndizi na Nyama",
description:"A traditional Tanzanian dish made with plantains and meat, often cooked in a flavorful sauce.",
price: 9000,
image: ndiziNyama,
featured: false,
category: "other",
},

{
  id: 16,
  name:"Chipsi-Kavu",
description:"A popular Tanzanian street food consisting of crispy fried potatoes, often served with a spicy sauce or as a side dish.",
price: 5000,
image: chipsiKavu,
featured: false,
category: "other",
},


];
    