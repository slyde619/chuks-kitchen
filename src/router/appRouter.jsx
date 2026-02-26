import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router";

import Home from "../pages/home";
import Explore from "../pages/explore";
import MealDetail from "../pages/mealDetail";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import OrderConfirmation from "../pages/orderConfirmation";
import Account from "../pages/account";
import MyOrders from "../pages/myOrders";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Onboarding from "../pages/auth/onboarding";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import ScrollToTopBtn from "../components/ui/scrollToTopBtn";

// Paths where navbar should be hidden
const PATHS_WITHOUT_NAVBAR = ["/", "/login", "/signup"];

const Layout = () => {
  const location = useLocation();
  const showNavbar = !PATHS_WITHOUT_NAVBAR.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {showNavbar && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // Onboarding/Landing page
      { path: "/", element: <Onboarding /> },
      // Auth routes (
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      // Main app routes
      { path: "/home", element: <Home /> },
      { path: "/explore", element: <Explore /> },
      { path: "/meal/:id", element: <MealDetail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/order-confirmation", element: <OrderConfirmation /> },
      { path: "/account", element: <Account /> },
      { path: "/orders", element: <MyOrders /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
