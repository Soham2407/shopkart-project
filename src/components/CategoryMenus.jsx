import CategoryShimmer from "./CategoryShimmer";

const CategoryMenus = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleCategory = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };
  return (
    <div className="flex flex-wrap gap-4">
      {categories.length === 0 ? (
        <>
          {Array.from({ length: 20 })?.map((_, index) => (
            <CategoryShimmer key={index} />
          ))}
        </>
      ) : (
        <>
          {categories?.map((category, index) => (
            <div
              key={index}
              className={`p-2 rounded-xl cursor-pointer ${
                selectedCategory === category
                  ? "bg-blue-400 text-white"
                  : "border border-blue-400"
              }`}
              onClick={() => handleCategory(category)}
            >
              {category}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CategoryMenus;
