import Banner from "../components/sections/banner";
import MenuItemCard from "../components/cards/MenuItemCard";
import { menuCategories, getItemsByCategory } from "../data/menuItems";

import bannerImg from "../assets/banners/explore.webp";
import { useState } from "react";

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  return (
    <section>
      <Banner
        backgroundImage={bannerImg}
        title="Chuk Kitchen"
        description="Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)"
      />
      <section className="w-full px-6 2xl:px-0 max-w-7xl mx-auto py-20">
        {/* Menu Categories */}
        <div className="bg-white rounded-md pt-7 pb-6 mb-8">
          <h3 className="pl-6 text-base lg:text-2xl font-semibold leading-[34px] text-black">
            Menu Categories
          </h3>
          {menuCategories.map((item, i) => (
            <article key={i} className="space-y-1 pt-4">
              <p
                className={
                  item === selectedCategory
                    ? "bg-[#FFE1C4] border-l-2 border-primary py-2"
                    : "text-black py-2"
                }
                style={{ paddingInlineStart: ".75rem" }}
              >
                {item}
              </p>
            </article>
          ))}
        </div>

        {/* Menu Items by Category */}
        <div className="space-y-12 w-full">
          {menuCategories.map((category) => {
            const categoryItems = getItemsByCategory(category);
            if (categoryItems.length === 0) return null;

            const isExpanded = expandedCategories.includes(category);
            const hasMore = categoryItems.length > 3;

            return (
              <div key={category}>
                <h2 className="text-xl lg:text-2xl font-semibold text-black mb-6">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full justify-between">
                  {categoryItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={
                        !isExpanded && index >= 3 ? "hidden md:block" : ""
                      }
                    >
                      <MenuItemCard
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                      />
                    </div>
                  ))}
                </div>

                {hasMore && (
                  <button
                    onClick={() => toggleCategory(category)}
                    className="md:hidden w-full text-center text-blue font-medium mt-4 py-2"
                  >
                    {isExpanded ? "Show Less" : "View All Categories"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <div className="h-30 bg-white" />
    </section>
  );
};
export default Explore;
