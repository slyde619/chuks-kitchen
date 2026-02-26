import { useState } from "react";
import { Link } from "react-router";
import CartItem from "../components/cart/CartItem";
import jellofRice from "../assets/foodCategories/chefs/jellofRice.webp";
import chickenRice from "../assets/foodCategories/chefs/riceChicken.webp";

const Cart = () => {
  // Mock cart data - matching screenshot
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      customizations: "With plantain, extra pepper sauce",
      quantity: 1,
      price: 3200,
      image: jellofRice,
    },
    {
      id: 2,
      name: "Jollof Rice & Fried Chicken",
      customizations: "With plantain, extra pepper sauce",
      quantity: 1,
      price: 3200,
      image: chickenRice,
    },
    {
      id: 3,
      name: "Jollof Rice & Fried Chicken",
      customizations: "With plantain, extra pepper sauce",
      quantity: 1,
      price: 3200,
      image: jellofRice,
    },
    {
      id: 4,
      name: "Jollof Rice & Fried Chicken",
      customizations: "With plantain, extra pepper sauce",
      quantity: 1,
      price: 3200,
      image: jellofRice,
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-8">
          Your Cart
        </h1>

        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              image={item.image}
              name={item.name}
              customizations={item.customizations}
              quantity={item.quantity}
              price={item.price * item.quantity}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>

        {/* Add More Items Link */}
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <span className="text-xl">+</span>
          Add more items from Chuks Kitchen
        </Link>
      </div>
    </div>
  );
};

export default Cart;
