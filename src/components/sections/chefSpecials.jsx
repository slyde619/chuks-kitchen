import { Link } from "react-router";
import { meals } from "../../data/meal";
import MealCard from "../cards/mealCard";
import SectionHeading from "../ui/sectionHeading";

const ChefSpecials = () => {
  return (
    <section className="px-4 md:px-16 xl:px-24 py-10">
      <div className="flex flex-col gap-6">
        <SectionHeading title="Chef's Specials" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-[50px] justify-items-center">
          {meals.map((meal, i) => (
            <div key={meal.id} className={i >= 3 ? "hidden md:contents" : "contents"}>
              <MealCard
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
                image={meal.image}
              />
            </div>
          ))}
        </div>

        <Link
          to="/explore"
          className="text-blue text-sm font-medium text-center hover:underline md:hidden"
        >
          View all specials
        </Link>
      </div>
    </section>
  );
};

export default ChefSpecials;
