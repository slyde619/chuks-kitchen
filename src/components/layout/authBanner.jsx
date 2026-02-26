import { Link } from "react-router";
import authBanner from "../../assets/auth/authBanner.webp";

const AuthBanner = ({ showOverlay = true }) => {
  return (
    <div className="relative w-full h-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${authBanner})`,
        }}
      />

      {/* Orange Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-primary opacity-80" />
      )}

      {/* Content */}
      {showOverlay && (
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-8 text-center">
          <Link
            to="/home"
            className="font-brand text-[48px] leading-tight mb-4"
          >
            Chuks Kitchen
          </Link>
          <p className="text-lg max-w-md">
            Your journey to delicious, authentic Nigerian meals starts here:
            Sign up or log in to order your favorites today!
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthBanner;
