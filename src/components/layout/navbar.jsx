import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "/home", label: "Home" },
  { to: "/explore", label: "Explore" },
  { to: "/orders", label: "My Orders" },
  { to: "/account", label: "Account" },
];

const navLinkClass = ({ isActive }) =>
  isActive ? "text-primary font-medium" : "text-gray-700 hover:text-primary";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full">
      <div className="mx-auto px-6 lg:px-10">
        <nav className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center text-primary font-brand text-[40.81px]"
            onClick={() => setMenuOpen(false)}
          >
            Chuks kitchen
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-30 px-[45px]">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/home"}
                className={navLinkClass}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA button (desktop) */}
          <div className="hidden xl:block">
            <Link to="/login" className="btn-primary text-base">
              Login
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="xl:hidden text-gray-700"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/home"}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="btn-primary text-base text-center"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};
export default Navbar;
