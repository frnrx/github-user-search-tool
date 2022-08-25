import React, { useState } from "react";
import { ReactComponent as SearchSVG } from "../../styles/assets/icons/icon-search.svg";
import { Button, Container, ErrorMessage, Input, Wrapper } from "./styles";

type SearchBarProps = {
  handleSearch: (value: string) => void;
  error?: boolean;
};

const SearchBar = ({ handleSearch, error }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <Container>
      <Wrapper>
        <SearchSVG />
        <Input
          id="username"
          name="username"
          aria-label="username"
          placeholder="Search GitHub username..."
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </Wrapper>
      <Wrapper>
        {error && <ErrorMessage>No results</ErrorMessage>}
        <Button onClick={() => handleSearch(searchValue)}>Search</Button>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
