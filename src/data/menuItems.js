// Import images
import jollofRice from "../assets/foodCategories/chefs/jellofRice.webp";
import ebaEgusi from "../assets/foodCategories/explore/eba_and_egusi.webp";
import pounded from "../assets/foodCategories/explore/pounded.webp";
import pepperedSnail from "../assets/foodCategories/explore/pepperedSnail.webp";
import grilledTilapia from "../assets/foodCategories/explore/grilled_tilapia.webp";
import jollofSmoked from "../assets/foodCategories/explore/jellof_smoked.webp";
import amala from "../assets/foodCategories/explore/amala.webp";
import okra from "../assets/foodCategories/explore/okra.webp";

export const menuCategories = [
  "Popular",
  "Jollof Rice & Entrees",
  "Swallow & Soups",
  "Grills & sides",
  "Beverages",
  "Desserts",
];

export const menuItemsByCategory = {
  Popular: [
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with crispy fried chicken and pumpkin leaf.",
      price: 3500,
      image: jollofRice,
      category: "Popular",
    },
    {
      id: 2,
      name: "Eba & Egusi Soup (Goat Meat)",
      description:
        "Hearty Egusi soup with tender goat meat, served with fresh eba.",
      price: 4500,
      image: ebaEgusi,
      category: "Popular",
    },
    {
      id: 3,
      name: "Pounded Yam & Edikaikong",
      description: "Traditional pounded yam with rich, tasty Edikaikong soup.",
      price: 3700,
      image: pounded,
      category: "Popular",
    },
    {
      id: 4,
      name: "Peppered Snail",
      description: "Spicy and savory peppered snail, perfect as a starter.",
      price: 3500,
      image: pepperedSnail,
      category: "Popular",
    },
    {
      id: 5,
      name: "Grilled Tilapia Fish",
      description: "Whole grilled tilapia seasoned with our special spices.",
      price: 4500,
      image: grilledTilapia,
      category: "Popular",
    },
    {
      id: 6,
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: 3500,
      image: jollofRice,
      category: "Popular",
    },
  ],

  "Jollof Rice & Entrees": [
    {
      id: 7,
      name: "Jollof Rice & Smoked Fish",
      description:
        "Flavored Jollof rice served with perfectly smoked fish.",
      price: 3500,
      image: jollofSmoked,
      category: "Jollof Rice & Entrees",
    },
    {
      id: 8,
      name: "Party Jollof Rice (Veg)",
      description: "Vegetarian party Jollof, full of rich flavors.",
      price: 2800,
      image: jollofRice,
      category: "Jollof Rice & Entrees",
    },
    {
      id: 9,
      name: "Party Jollof Rice (Veg)",
      description: "Vegetarian party Jollof, full of rich flavors.",
      price: 3500,
      image: jollofRice,
      category: "Jollof Rice & Entrees",
    },
  ],

  "Swallow & Soups": [
    {
      id: 10,
      name: "Amala with Gbegiri & Ewedu",
      description:
        "Classic Amala served with Gbegiri (bean soup) and Ewedu (jute leaf).",
      price: 3100,
      image: amala,
      category: "Swallow & Soups",
    },
    {
      id: 11,
      name: "Fufu & Okra Soup (Fish)",
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      price: 3500,
      image: okra,
      category: "Swallow & Soups",
    },
    {
      id: 12,
      name: "Fufu & Okra Soup (Fish)",
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      price: 3500,
      image: okra,
      category: "Swallow & Soups",
    },
  ],

  "Grills & sides": [],

  Beverages: [],

  Desserts: [],
};

// Helper function to get all menu items
export const getAllMenuItems = () => {
  return Object.values(menuItemsByCategory).flat();
};

// Helper function to get items by category
export const getItemsByCategory = (category) => {
  return menuItemsByCategory[category] || [];
};
