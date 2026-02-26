import { Link } from "react-router";
import { quickLinks, contactInfo, socialLinks } from "../../data/footer";

const Footer = () => {
  return (
    <footer className="bg-[#FF7A18]/30 w-full">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-18">
        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-4">
          <Link
            to="/home"
            className="font-brand text-[36px] text-primary leading-none"
          >
            Chuks Kitchen
          </Link>
          <p className="text-dark text-sm leading-relaxed">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-dark text-base">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-dark hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-dark text-base">Contact Us</h4>
          <ul className="flex flex-col gap-2">
            {contactInfo.map(({ label }) => (
              <li key={label} className="text-sm text-dark">
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Social */}
        <div className="flex flex-col gap-2">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-dark hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
        <p className="text-sm text-dark">
          © {new Date().getFullYear()} Chuks Kitchen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
