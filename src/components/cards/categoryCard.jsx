const CategoryCard = ({ name, image }) => (
  <div className="bg-white rounded-[14px] overflow-hidden w-full max-w-[390px] aspect-390/393 flex flex-col">
    <img
      src={image}
      alt={name}
      className="flex-1 w-full object-cover min-h-0"
      loading="lazy"
      decoding="async"
    />
    <p className="text-sm md:text-2xl font-medium lg:font-semibold text-dark text-center pt-2.5 lg:pt-12 pb-[18px] lg:pb-20  shrink-0">
      {name}
    </p>
  </div>
);

export default CategoryCard;
