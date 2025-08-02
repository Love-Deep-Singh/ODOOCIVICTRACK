import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange }) => (
    <input
        type="text"
        placeholder="Search Issues"
        value={value}
        onChange={onChange}
        className="search-input"
    />
);

export default SearchBar;
