import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

import { Wrapper, SearchInput } from "./styles";
function index({ placeholder }) {
  return (
    <Wrapper>
      <SearchIcon />
      <SearchInput placeholder={placeholder} />
    </Wrapper>
  );
}

export default index;
