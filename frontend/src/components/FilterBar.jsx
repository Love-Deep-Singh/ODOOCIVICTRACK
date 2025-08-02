import React from 'react';
import './FilterBar.css';

const FilterBar = ({ currentFilter, onFilterChange }) => {
    const filters = ['All Issues', 'Garbage', 'Roads', 'Drainage'];

    return (
        <div className="filter-bar">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={currentFilter === filter ? 'active' : ''}
                    onClick={() => onFilterChange(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
