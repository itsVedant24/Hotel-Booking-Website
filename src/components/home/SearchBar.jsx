import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (!search.trim()) return;

    navigate(`/hotels?search=${encodeURIComponent(search)}`);
  }

  return (
    <div className="search-bar">
      <div className="search-item">
        <input
          type="text"
          placeholder="Search by city or hotel"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
