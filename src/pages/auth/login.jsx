import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import AuthBanner from "../../components/layout/authBanner";

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
    handleLogin();
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Banner */}
      <div className="hidden lg:block lg:w-1/2">
        <AuthBanner />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-brand text-primary text-2xl mb-2">
              Chuks Kitchen
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              Login your Account
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email or Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email or phone number
              </label>
              <div className="relative">
                <MdEmail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  placeholder="name@gmail.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <IoMdLock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FcGoogle size={20} />
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button>
            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaApple size={20} />
              <span className="text-gray-700 font-medium">
                Continue with Apple
              </span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an Account?{" "}
            <Link
              to="/signup"
              className="text-primary font-medium hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
