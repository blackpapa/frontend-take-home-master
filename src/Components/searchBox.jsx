import React, { Component } from "react";

const SearchBox = ({ onChange, searchQuery, onSearch }) => {
  return (
    <div>
      <label style={{ marginRight: 5 }}>Title</label>
      <input
        type="string"
        name="title"
        style={{ marginRight: 5 }}
        value={searchQuery.title}
        onChange={(e) => onChange(e)}
      />
      <label style={{ marginRight: 5 }}>Year</label>
      <input
        type="string"
        name="year"
        style={{ marginRight: 5 }}
        value={searchQuery.year}
        onChange={(e) => onChange(e)}
      />
      <button className="btn btn-sm btn-primary" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
