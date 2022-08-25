import React from "react";
import SearchBar from "../../components/SearchBar";

const DevFinder = () => {
  //WIP

  const handleSearch = (searchValue: string) => {
    console.log("searchValue", searchValue);
  };
  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};

export default DevFinder;
