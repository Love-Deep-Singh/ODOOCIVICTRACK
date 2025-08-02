import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IssueCard from '../components/IssueCard';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const mockIssues = [
    {
        title: 'Garbage Overflow on Main Street',
        description: 'The garbage bin near the bus stop is overflowing...',
        location: 'Main St, Downtown',
        date: 'Jan 10, 2025',
        status: 'Pending',
        reporter: 'Sarah Johnson',
    },
    // You can add more mock issues here
];

const Home = () => {
    const [filter, setFilter] = useState('All Issues');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const filteredIssues = mockIssues
        .filter((issue) =>
            filter === 'All Issues' ? true : issue.title.includes(filter)
        )
        .filter((issue) => issue.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{ padding: '20px' }}>
            {/* <h2>CivicTrack</h2> */}
            <button
                style={{
                    float: 'right',
                    marginBottom: '10px',
                    padding: '10px 20px',
                    background: 'lightgreen',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/create')}
            >
                + Report New Issue
            </button>
            <FilterBar currentFilter={filter} onFilterChange={setFilter} />
            <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '20px' }}>
                {filteredIssues.map((issue, i) => (
                    <IssueCard key={i} {...issue} />
                ))}
            </div>

            <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />
        </div>
    );
};

export default Home;
