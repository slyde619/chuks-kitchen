import Hero from "../components/sections/hero";
import SearchBar from "../components/ui/searchBar";
import PopularCategories from "../components/sections/popularCategories";
import ChefSpecials from "../components/sections/chefSpecials";
import Banner from "../components/sections/banner";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="relative z-10 -mt-7 px-4 md:w-[55vw] md:px-0 md:mx-auto">
        <SearchBar />
      </div>

      <PopularCategories />
      <ChefSpecials />
      <Banner
        title="Introducing Our New Menu Additions!"
        description="Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!"
        buttonText="Discover what’s new"
      />
    </div>
  );
};

export default Home;
