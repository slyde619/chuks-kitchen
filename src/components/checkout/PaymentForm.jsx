import { useState } from "react";

const PaymentForm = ({ onBack, onComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const totalAmount = 9900;

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Processing payment...");
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back Button */}
        <button
          type="button"
          onClick={onBack}
          className="mb-4 py-2 px-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-orange-50 transition-colors"
        >
          Back
        </button>

        <div className="bg-white rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-black mb-6 pb-6 border-b border-gray">
            Payment
          </h2>

          <form onSubmit={handlePayment}>
            {/* Payment Method Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-black mb-4">
                Pay With:
              </h3>
              <div className="flex justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border-2 border-gray peer-checked:border-[#2FBD6A] peer-checked:border-[6px] transition-all"></div>
                  </div>
                  <span
                    className={`text-base transition-colors ${
                      paymentMethod === "card" ? "text-black" : "text-gray"
                    }`}
                  >
                    Card
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border-2 border-gray peer-checked:border-[#2FBD6A] peer-checked:border-[6px] transition-all"></div>
                  </div>
                  <span
                    className={`text-base transition-colors ${
                      paymentMethod === "bank" ? "text-black" : "text-gray"
                    }`}
                  >
                    Bank
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={paymentMethod === "transfer"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border-2 border-gray peer-checked:border-[#2FBD6A] peer-checked:border-[6px] transition-all"></div>
                  </div>
                  <span
                    className={`text-base transition-colors ${
                      paymentMethod === "transfer" ? "text-black" : "text-gray"
                    }`}
                  >
                    Transfer
                  </span>
                </label>
              </div>
            </div>

            {/* Card Payment Form */}
            {paymentMethod === "card" && (
              <>
                {/* Card Number */}
                <div className="mb-6">
                  <label className="block text-base font-medium text-black mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9101 1121"
                    className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    maxLength="19"
                  />
                </div>

                {/* Expiration Date and CVV */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-base font-medium text-black mb-2">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      maxLength="5"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-black mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      maxLength="3"
                    />
                  </div>
                </div>

                {/* Save Card Checkbox */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={saveCard}
                        onChange={(e) => setSaveCard(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 rounded border-2 border-gray peer-checked:bg-[#2FBD6A] peer-checked:border-[#2FBD6A] transition-all flex items-center justify-center">
                        {saveCard && (
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
                    <span className="text-sm text-gray">Save card details</span>
                  </label>
                </div>
              </>
            )}

            {/* Pay Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-4"
            >
              Pay ₦{totalAmount.toLocaleString()}
            </button>

            {/* Privacy Policy Notice */}
            <p className="text-sm text-gray">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
