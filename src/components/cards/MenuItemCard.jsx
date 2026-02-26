import { IoAdd } from "react-icons/io5";
import { useNavigate } from "react-router";

const MenuItemCard = ({ id, name, description, price, image }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    navigate(`/meal/${id}`);
  };

  const handleCardClick = () => {
    navigate(`/meal/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-[14px] overflow-hidden w-full flex flex-row md:flex-col cursor-pointer  transition-shadow p-2"
    >
      {/* Image - square on mobile, tall on desktop */}
      <div className="w-28 h-28 shrink-0 md:w-full md:h-[280px] rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center px-3 py-2 md:px-[14px] md:pt-6 md:pb-4 flex-1 min-w-0">
        <h3 className="text-sm md:text-base lg:text-xl font-semibold text-dark md:min-h-12 mb-0.5 md:mb-1 line-clamp-1 md:line-clamp-none">
          {name}
        </h3>

        <p className="text-xs md:text-sm lg:text-base text-dark font-medium leading-tight md:leading-[24px] line-clamp-2 md:line-clamp-3 md:min-h-18 mb-1.5 md:mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between md:pt-2 md:pb-4">
          <span className="text-sm md:text-base lg:text-lg font-semibold text-primary">
            ₦{price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors cursor-pointer"
            aria-label="Add to cart"
          >
            <IoAdd className="text-base md:text-[22px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
