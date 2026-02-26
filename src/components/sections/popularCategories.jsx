import { Link } from "react-router";
import { categories } from "../../data/categories";
import CategoryCard from "../cards/categoryCard";
import SectionHeading from "../ui/sectionHeading";

const PopularCategories = () => {
  return (
    <section className="px-4 md:px-16 xl:px-24 py-10 lg:pt-28">
      <div className="flex flex-col gap-6">
        <SectionHeading title="Popular Categories" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[50px] justify-items-center pt-5 lg:pt-12">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={i >= 3 ? "hidden md:contents" : "contents"}
            >
              <CategoryCard name={cat.name} image={cat.image} />
            </div>
          ))}
        </div>

        <Link
          to="/explore"
          className="text-blue text-sm font-medium text-center hover:underline md:hidden"
        >
          View all categories
        </Link>
      </div>
    </section>
  );
};

export default PopularCategories;
