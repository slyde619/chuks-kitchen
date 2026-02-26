import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-15 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-[#0081FE] text-white shadow-lg hover:opacity-90 transition-opacity"
    >
      <FaArrowUp size={14} />
    </button>
  );
};
export default ScrollToTopBtn;
