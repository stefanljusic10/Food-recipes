import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledSearch, SearchInput, SearchLink } from '../styles/Header.styled';

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const getSearchData = () => {
    history.push(`/search/s=${searchTerm}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      history.push(`/search/s=${searchTerm}`);
    }
  };

  return (
    <StyledSearch>
      <SearchInput
        onChange={(e) =>
          setSearchTerm((prevSearchTerm) => (prevSearchTerm = e.target.value))
        }
        onKeyPress={(e) => handleKeyPress(e)}
        type="text"
        placeholder="Search recipes"
      />
      <SearchLink to={`/search/${searchTerm}`} onClick={() => getSearchData()}>
        <i className="fa fa-search"></i>
      </SearchLink>
    </StyledSearch>
  );
}

export default Search;
