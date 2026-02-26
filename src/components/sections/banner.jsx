import bannerImg from "../../assets/banners/banner.webp";

const Banner = ({
  title,
  description,
  buttonText,
  buttonOnClick,
  backgroundImage = bannerImg,
}) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-black/55">
        <article className="flex flex-col items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[150%]">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-full lg:max-w-xl">
            {description}
          </p>

          {/* Button */}
          {buttonText && (
            <button
              onClick={buttonOnClick}
              className="btn-primary text-xs sm:text-sm md:text-base capitalize mt-2"
            >
              {buttonText}
            </button>
          )}
        </article>
      </div>
    </section>
  );
};

export default Banner;
