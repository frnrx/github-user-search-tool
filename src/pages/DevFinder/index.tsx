import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import UserCard from "../../components/UserCard";
import fetchUser from "./fetchUser";

const DevFinder = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (searchValue: string) => {
    setLoading(true);
    setError(false);
    const searchResult = await fetchUser(searchValue);

    setTimeout(() => {
      if (searchResult) {
        setUser(searchResult);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 1000);
  };

  const handleFirstLoad = async () => {
    const defaultUser = localStorage.getItem("defaultUser");
    if (defaultUser) {
      setUser(JSON.parse(defaultUser));
    } else {
      const searchResult = await fetchUser("frnrx");
      if (searchResult) {
        setUser(searchResult);
        localStorage.setItem("defaultUser", JSON.stringify(searchResult));
      }
    }
  };

  useEffect(() => {
    handleFirstLoad();
  }, []);

  return (
    <div>
      <SearchBar handleSearch={handleSearch} loading={loading} error={error} />
      {user && <UserCard user={user} />}
    </div>
  );
};

export default DevFinder;
