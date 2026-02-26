import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/explore");
  };

  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/hero-768.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 769px)"
          srcSet="/hero-1920.webp"
          type="image/webp"
        />
        <img
          src="/hero-1920.webp"
          alt="Chuk's Kitchen — fresh, flavourful meals"
          width={1920}
          height={1365}
          fetchpriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Overlay + content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-4 md:px-16 xl:px-24 bg-black/45">
        <article className="flex flex-col items-start gap-4 md:gap-6 max-w-2xl">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-tight">
            The Heart of Nigerian Home Cooking
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl font-semibold leading-snug">
            Handcrafted with passion, delivered with care.
          </p>
          <button
            onClick={handleExplore}
            className="btn-primary text-sm md:text-base capitalize"
          >
            discover what's new
          </button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
