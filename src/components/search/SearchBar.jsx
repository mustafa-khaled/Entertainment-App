import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = () => {
    if (query.length > 2) {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchQueryHandler();
    }
  };

  return (
    <div className="flex items-center ">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        placeholder="Search Of A Movie Or TV Show !"
        type="text"
        className="w-full  border-b border-transparent bg-transparent p-[15px] outline-none placeholder:text-colorGreyishBlue focus:border-colorGreyishBlue"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={searchQueryHandler}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
