import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

import "./SearchBarComponent.css";

const SearchBarComponent = ({ setSearchValue }) => {
  const [searchInput, setSearchInput] = useState("");
  const heandleSearch = () => {
    setSearchValue(searchInput.trim());
  };

  return (
    <div className="searchInputs m-2">
      <div className="searchIcon">
        <SearchIcon sx={{ width: 12 }} onClick={() => heandleSearch()} />
      </div>
      <div>
        <TextField
          type="search"
          id="search"
          placeholder="Search candiadate"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          sx={{ width: 200 }}
        />
      </div>
    </div>
  );
};

SearchBarComponent.propTypes = {
  setSearchValue: PropTypes.func,
};
SearchBarComponent.defaultProps = {
  setSearchValue: () => { },
};

export default SearchBarComponent;
