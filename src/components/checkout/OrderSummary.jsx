import { useState } from "react";

const OrderSummary = ({ onNext }) => {
  const [promoCode, setPromoCode] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [specialInstructions, setSpecialInstructions] = useState("");

  // Mock order data
  const subtotal = 9200;
  const deliveryFee = 500;
  const serviceFee = 200;
  const tax = 0;
  const total = subtotal + deliveryFee + serviceFee + tax;

  const handleApplyPromo = () => {
    console.log("promo code:");
  };

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 max-w-2xl mx-auto shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
        Order Summary
      </h2>

      {/* Promo Code Section */}
      <div className="mb-6 pb-6 border-b border-gray">
        <h3 className="text-lg font-semibold text-black mb-3">
          Add a Promo Code
        </h3>
        <div className="flex gap-3">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter Code here"
            className="min-w-0 flex-1 px-4 py-3 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            onClick={handleApplyPromo}
            className="shrink-0 px-4 md:px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-hover transition-colors"
          >
            Login
          </button>
        </div>
      </div>

      {/* Order Breakdown */}
      <div className="mb-4 space-y-4">
        <div className="flex justify-between text-base text-gray">
          <span>Subtotal</span>
          <span className="font-medium">₦{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-base text-gray">
          <span>Delivery Fee</span>
          <span className="font-medium">₦{deliveryFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-base text-gray">
          <span>Service Fee</span>
          <span className="font-medium">₦{serviceFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-base text-gray">
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
        <div className="bg-body p-1 rounded-lg">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => setDeliveryMethod("delivery")}
              className={`py-3 px-4 rounded-md font-semibold transition-all duration-300 ease-in-out ${
                deliveryMethod === "delivery"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-transparent text-gray hover:text-dark"
              }`}
            >
              Delivery
            </button>
            <button
              onClick={() => setDeliveryMethod("pickup")}
              className={`py-3 px-4 rounded-md font-semibold transition-all duration-300 ease-in-out ${
                deliveryMethod === "pickup"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-transparent text-gray hover:text-dark"
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
          className="w-full p-4 border border-gray rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          rows="4"
        />
      </div>

      {/* Proceed Button */}
      <button
        onClick={onNext}
        className="w-full bg-primary text-white py-4 rounded-md font-semibold text-lg hover:bg-primary-hover transition-colors shadow-sm"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
