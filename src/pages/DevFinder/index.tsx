import React from "react";
import SearchBar from "../../components/SearchBar";
import UserCard from "../../components/UserCard";
import user from "../../mocks/user-mock.json";

const DevFinder = () => {
  //WIP

  const handleSearch = (searchValue: string) => {
    console.log("searchValue", searchValue);
  };
  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <UserCard user={user} />
    </div>
  );
};

export default DevFinder;
