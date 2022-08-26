import React, { useState } from "react";
import Icon from "../Icons";
import { Button, Container, ErrorMessage, Input, Wrapper } from "./styles";

type SearchBarProps = {
  handleSearch: (value: string) => void;
  loading: boolean;
  error?: boolean;
};

const SearchBar = ({ handleSearch, error, loading }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const disableButton = !searchValue.length;
  return (
    <Container>
      <Wrapper>
        <Icon icon="search" />
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
        <Button
          onClick={() => handleSearch(searchValue)}
          disabled={disableButton}
        >
          {loading ? "Loading..." : "Search"}
        </Button>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
