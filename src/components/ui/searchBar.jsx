import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 bg-white rounded-md shadow-lg p-4 w-full">
      <FiSearch className="text-[#807373] shrink-0" size={26} />
      <input
        type="search"
        placeholder="What are you craving for today?"
        className="flex-1 bg-transparent outline-none text-dark placeholder:text-dark text-base"
      />
    </div>
  );
};

export default SearchBar;
