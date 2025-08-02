import React, { useState } from 'react';
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
    // Add more issues as per your image
];

const Home = () => {
    const [filter, setFilter] = useState('All Issues');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const filteredIssues = mockIssues
        .filter((issue) =>
            filter === 'All Issues' ? true : issue.title.includes(filter)
        )
        .filter((issue) => issue.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{ padding: '20px' }}>
            <h2>CivTrack</h2>
            <button style={{ float: 'right' }}>+ Report New Issue</button>
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
