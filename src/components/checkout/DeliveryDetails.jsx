import { useState } from "react";

const DeliveryDetails = ({ onNext, onBack }) => {
  const [deliveryTime, setDeliveryTime] = useState("ASAP(30-25)");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [contactAddress, setContactAddress] = useState("+234 801 234 5678");

  // Mock address data
  const homeAddress = {
    label: "Home",
    street: "123 Main Street, Victoria Island, Lagos",
    apt: "Apt 4B, Opposite Mega Plaza",
  };

  return (
    <div className="bg-body min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-black mb-6">
            Delivery Details
          </h2>

          {/* Address Section */}
          <div className="mb-6 p-4 border border-gray rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-base text-dark mb-1">
                  <span className="font-semibold">{homeAddress.label}:</span>{" "}
                  {homeAddress.street}
                </p>
                <p className="text-sm text-gray">{homeAddress.apt}</p>
              </div>
              <button className="text-blue hover:underline font-medium text-sm whitespace-nowrap ml-4">
                Change Address
              </button>
            </div>
          </div>

          {/* Delivery Time */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-black mb-3">
              Delivery Time
            </h3>
            <input
              type="text"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Delivery Instructions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-black mb-3">
              Delivery Instructions (Optional)
            </h3>
            <textarea
              value={deliveryInstructions}
              onChange={(e) => setDeliveryInstructions(e.target.value)}
              placeholder="E.g leave at the front of the door, knock twice.................."
              className="w-full p-4 border border-gray rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              rows="3"
            />
          </div>

          {/* Contact Address */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-3">
              Contact Address
            </h3>
            <input
              type="tel"
              value={contactAddress}
              onChange={(e) => setContactAddress(e.target.value)}
              className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={onBack}
              className="w-full md:flex-1 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-orange-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={onNext}
              className="w-full md:flex-1 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
