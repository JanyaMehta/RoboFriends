import React from "react";

const SearchBox = ({ searchfield, searChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searChange}
      />
    </div>
  );
};
export default SearchBox;
