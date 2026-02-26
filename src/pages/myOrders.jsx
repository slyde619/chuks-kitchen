import { useState } from "react";
import { useNavigate } from "react-router";

const MyOrders = () => {
  const [promoCode, setPromoCode] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const navigate = useNavigate();

  // Mock order data
  const subtotal = 9200;
  const deliveryFee = 500;
  const serviceFee = 200;
  const tax = 0;
  const total = subtotal + deliveryFee + serviceFee + tax;

  const handleApplyPromo = () => {
    console.log("Applying promo code:", promoCode);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="bg-white rounded-lg p-6 md:p-8 max-w-2xl mx-auto ">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
          Order Summary
        </h2>

        {/* Promo Code Section */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-black mb-3">
            Add a Promo Code
          </h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter Code here"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              onClick={handleApplyPromo}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-hover transition-colors"
            >
              Login
            </button>
          </div>
        </div>

        {/* Order Breakdown */}
        <div className="mb-4 space-y-4">
          <div className="flex justify-between text-base text-gray-700">
            <span>Subtotal</span>
            <span className="font-medium">₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-base text-gray-700">
            <span>Delivery Fee</span>
            <span className="font-medium">₦{deliveryFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-base text-gray-700">
            <span>Service Fee</span>
            <span className="font-medium">₦{serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-base text-gray-700">
            <span>Tax</span>
            <span className="font-medium">₦{tax}</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between text-xl md:text-2xl font-bold text-black mb-6 py-4">
          <span>Total</span>
          <span>₦{total.toLocaleString()}</span>
        </div>

        {/* Delivery Method Toggle */}
        <div className="mb-6">
          <div className="bg-gray-100 p-1 rounded-lg">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setDeliveryMethod("delivery")}
                className={`py-3 px-4 rounded-md font-semibold transition-all duration-300 ease-in-out ${
                  deliveryMethod === "delivery"
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                Delivery
              </button>
              <button
                onClick={() => setDeliveryMethod("pickup")}
                className={`py-3 px-4 rounded-md font-semibold transition-all duration-300 ease-in-out ${
                  deliveryMethod === "pickup"
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                Pick up
              </button>
            </div>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-3">
            Special Instructions for Restaurant
          </h3>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
            className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            rows="4"
          />
        </div>

        {/* Proceed Button */}
        <button
          onClick={handleCheckout}
          className="w-full bg-primary text-white py-4 rounded-md font-semibold text-lg hover:bg-primary-hover transition-colors shadow-sm"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
