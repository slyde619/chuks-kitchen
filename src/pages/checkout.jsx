import { useState } from "react";
import { useNavigate } from "react-router";
import DeliveryDetails from "../components/checkout/DeliveryDetails";
import PaymentForm from "../components/checkout/PaymentForm";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePaymentComplete = () => {
    // Navigate to order confirmation page
    navigate("/order-confirmation");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Step Content */}
      {currentStep === 1 && (
        <DeliveryDetails onNext={handleNextStep} onBack={() => navigate("/orders")} />
      )}
      {currentStep === 2 && (
        <PaymentForm
          onBack={handlePreviousStep}
          onComplete={handlePaymentComplete}
        />
      )}
    </div>
  );
};

export default Checkout;
