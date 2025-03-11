import React, { ChangeEvent } from "react";

interface SearchBarProps {
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search items..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
