import { Link } from "react-router";
import { IoRestaurant, IoRocketSharp } from "react-icons/io5";
import { MdHandshake } from "react-icons/md";
import AuthBanner from "../../components/layout/authBanner";

const Onboarding = () => {
  const features = [
    {
      icon: <IoRestaurant size={20} />,
      title: "Freshly Prepared",
    },
    {
      icon: <MdHandshake size={20} />,
      title: "Support Local Business",
    },
    {
      icon: <IoRocketSharp size={20} />,
      title: "Fast & Reliable Delivery",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="hidden lg:block lg:w-1/2">
        <AuthBanner showOverlay={false} />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex flex-col px-8 mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-around py-6">
          <h1 className="font-brand text-primary text-4xl">Chuks Kitchen</h1>
          <Link
            to="/login"
            className="border-2 border-blue text-blue px-6 py-2 rounded-lg font-medium hover:bg-blue hover:text-zinc-50 transition-colors"
          >
            Sign in
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center  py-12">
          <div className="w-full max-w-xl">
            {/* Hero Text */}
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Your Authentic Taste of Nigeria
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience the rich, homemade flavors of Nigerian cuisine,
                crafted with authentic recipes and the finest ingredients.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[calc(50%-12px)] flex items-center gap-3"
                >
                  <div
                    className="flex items-center justify-center size-11 rounded-[13px] shrink-0"
                    style={{ backgroundColor: "#FFE1C4" }}
                  >
                    <div style={{ color: "#FF7A18" }}>{feature.icon}</div>
                  </div>
                  <h3 className="font-inter font-medium text-base text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-6">
              <Link to="/signup">
                <button className="w-full bg-primary text-white py-4 rounded-[18px] font-semibold text-lg hover:bg-primary-hover transition-colors cursor-pointer">
                  Start Your Order
                </button>
              </Link>
              <Link to="/explore">
                <button className="w-full border-2 border-blue text-blue py-4 rounded-[18px] font-semibold text-lg hover:bg-blue hover:text-white transition-colors cursor-pointer">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 text-center text-sm text-gray-600">
          © 2024 Chuks Kitchen.{" "}
          <Link to="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>{" "}
          •{" "}
          <Link to="/terms" className="hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
