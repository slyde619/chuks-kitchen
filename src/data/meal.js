import spicyTilapia from "../assets/foodCategories/chefs/spicyTilapia.webp";
import egusiImg from "../assets/foodCategories/chefs/egusiSoup.webp";
import jellof from "../assets/foodCategories/chefs/jellofRice.webp";
import chickenRice from "../assets/foodCategories/chefs/riceChicken.webp";

export const images = [spicyTilapia, jellof, chickenRice, egusiImg];

export const meals = [
  {
    id: 1,
    name: "Spicy Tilapia Pepper Soup",
    description:
      "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    price: 3500,
    image: spicyTilapia,
  },
  {
    id: 2,
    name: "Jollof Rice & Fried Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: 3500,
    image: jellof,
  },
  {
    id: 3,
    name: "Jollof Rice & Smoked Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.",
    price: 3500,
    image: jellof,
  },
  {
    id: 4,
    name: "Egusi Soup & Pounded Yam",
    description:
      "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    price: 3500,
    image: jellof,
  },
  {
    id: 5,
    name: "Jollof Rice & Plantain",
    description:
      "Our signature Jollof rice served alongside sweet fried plantain and grilled chicken.",
    price: 3500,
    image: chickenRice,
  },
  {
    id: 6,
    name: "Banga Soup & Starch",
    description:
      "Traditional palm nut soup slow-cooked with assorted fish and beef, served with starch.",
    price: 4000,
    image: egusiImg,
  },
];
