import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { PiArrowLeft, PiTimerThin, PiX } from "react-icons/pi";
import { meals } from "../data/meal";

const MealDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedProtein, setSelectedProtein] = useState("fried-chicken");
  const [selectedSides, setSelectedSides] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");

  useEffect(() => {
    // Find the meal by id
    const meal = meals.find((m) => m.id === parseInt(id));
    if (meal) {
      setSelectedMeal(meal);
    } else {
      // If meal not found, redirect to explore
      navigate("/explore");
    }
  }, [id, navigate]);

  const proteins = [
    { id: "fried-chicken", name: "Fried Chicken", price: 0, isDefault: true },
    { id: "grilled-fish", name: "Grilled Fish", price: 500 },
    { id: "beef", name: "Beef", price: 700 },
  ];

  const sides = [
    { id: "fried-plantain", name: "Fried Plantain", price: 700 },
    { id: "coleslaw", name: "Coleslaw", price: 500 },
    { id: "pepper-sauce", name: "Extra Pepper Sauce", price: 300 },
  ];

  const handleSideToggle = (sideId) => {
    setSelectedSides((prev) =>
      prev.includes(sideId)
        ? prev.filter((id) => id !== sideId)
        : [...prev, sideId],
    );
  };

  const calculateTotal = () => {
    if (!selectedMeal) return 0;
    const proteinPrice =
      proteins.find((p) => p.id === selectedProtein)?.price || 0;
    const sidesPrice = selectedSides.reduce((total, sideId) => {
      const side = sides.find((s) => s.id === sideId);
      return total + (side?.price || 0);
    }, 0);
    return selectedMeal.price + proteinPrice + sidesPrice;
  };

  const handleAddToCart = () => {
    navigate("/cart");
  };

  if (!selectedMeal) return null;

  return (
    <div className="min-h-screen bg-body">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Back Button - visible on md+ */}
        <button
          onClick={() => navigate(-1)}
          className="hidden md:flex items-center gap-2 text-gray hover:text-dark transition-colors mb-4"
        >
          <PiArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Close Button - mobile only, positioned top-right */}
          <div className="flex justify-end p-3 md:hidden">
            <button
              onClick={() => navigate(-1)}
              className="p-1 text-gray hover:text-dark transition-colors"
            >
              <PiX className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Product Image (hidden on mobile) */}
            <div className="relative min-h-[400px] hidden md:block">
              <img
                src={selectedMeal.image}
                alt={selectedMeal.name}
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Right Side - Product Details */}
            <div className="p-5 pt-0 md:p-8">
              {/* Product Info */}
              <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
                {selectedMeal.name}
              </h1>
              <p className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                ₦{selectedMeal.price.toLocaleString()}
              </p>
              <p className="text-gray text-sm md:text-base mb-5 md:mb-6">
                {selectedMeal.description}
              </p>

              {/* Info Badges - gray bg on mobile, plain on md+ */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <span className="flex items-center gap-2 text-sm bg-gray/10 rounded-lg px-3 py-1.5 md:bg-transparent md:px-0 md:py-0 md:rounded-none">
                  <PiTimerThin className="w-4 h-4 text-primary" />
                  Mildly spicy
                </span>
                <button className="text-sm flex items-center gap-1 bg-gray/10 rounded-lg px-3 py-1.5 md:bg-transparent md:px-0 md:py-0 md:rounded-none text-blue-600 md:hover:underline">
                  <PiTimerThin className="w-4 h-4 text-primary" />
                  View Allergies
                </button>
                <span className="flex items-center gap-2 text-sm bg-gray/10 rounded-lg px-3 py-1.5 md:bg-transparent md:px-0 md:py-0 md:rounded-none">
                  <PiTimerThin className="w-4 h-4 text-primary" />
                  Vegetarian option available
                </span>
              </div>

              {/* Choose Your Protein */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Choose Your Protein
                </h3>
                <div className="space-y-3">
                  {proteins.map((protein) => (
                    <label
                      key={protein.id}
                      className="flex items-center justify-between p-3 border border-gray rounded-lg cursor-pointer hover:bg-body"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <input
                            type="radio"
                            name="protein"
                            value={protein.id}
                            checked={selectedProtein === protein.id}
                            onChange={(e) => setSelectedProtein(e.target.value)}
                            className="sr-only peer"
                          />
                          <div className="w-5 h-5 rounded-full border-2 border-gray peer-checked:border-primary peer-checked:border-[6px] transition-all"></div>
                        </div>
                        <span className="text-base">
                          {protein.name}
                          {protein.isDefault && (
                            <span className="text-gray ml-2">(Default)</span>
                          )}
                        </span>
                      </div>
                      {protein.price > 0 && (
                        <span className="text-sm text-gray">
                          +₦{protein.price}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Extra Sides (Optional) */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Extra Sides (Optional)
                </h3>
                <div className="space-y-3">
                  {sides.map((side) => (
                    <label
                      key={side.id}
                      className="flex items-center justify-between p-3 border border-gray rounded-lg cursor-pointer hover:bg-body"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedSides.includes(side.id)}
                            onChange={() => handleSideToggle(side.id)}
                            className="sr-only peer"
                          />
                          <div className="w-5 h-5 rounded border-2 border-gray peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                            {selectedSides.includes(side.id) && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M5 13l4 4L19 7"></path>
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-base">{side.name}</span>
                      </div>
                      <span className="text-sm text-gray">+₦{side.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Special Instructions
                </h3>
                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
                  className="w-full p-3 border border-gray rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="3"
                />
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Add to Cart - ₦{calculateTotal().toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
