import { useNavigate } from "react-router";

const MealCard = ({ id, name, description, price, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/meal/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    navigate(`/meal/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-[14px] overflow-hidden w-full max-w-[390px] min-h-[487px] flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
    >
      <img
        src={image}
        alt={name}
        className="w-full object-cover shrink-0 flex-1"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col gap-2 px-[14px] pt-4 pb-3">
        <h3 className="text-sm lg:text-2xl font-semibold text-dark">{name}</h3>
        <p className="text-base text-dark font-medium leading-[24px] line-clamp-3">
          {description}
        </p>
        <div className="flex items-center pt-[25px] pb-[46px] justify-between mt-auto">
          <span className="text-base font-medium leading-[24px] text-primary">
            ₦{price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            className="btn-primary px-[36.5px] py-[15px] text-xs rounded-[10px]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
