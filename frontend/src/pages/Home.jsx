import React, { useEffect, useState } from 'react';
import IssueCard from '../components/IssueCard';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { getNearbyIssues } from '../services/issue';

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
    const [issues, setIssues] = useState(mockIssues);
    const [loading, setLoading] = useState(true);
    const [lat, setLat] = useState(12.97); // Example latitude
    const [lng, setLng] = useState(77.59); // Example longitude
    const [distance, setDistance] = useState(5); // Default distance in km
   // ...existing code...
const fetchIssues = async ({ lat, lng, distance }) => {
    if (lat == null || lng == null || distance == null) return;
    setLoading(true);
    try {
        const data = await getNearbyIssues({ lat, lng, distance });
        setIssues(data);
        console.log('Fetched issues:', data);
    } catch (err) {
        console.error('Failed to fetch nearby issues:', err.response?.data?.message || err.message);
    } finally {
        setLoading(false);
    }
};

useEffect(() => {
    if (lat != null && lng != null && distance != null) {
        fetchIssues({ lat, lng, distance });
    }
}, [lat, lng, distance]);
// ...existing code...
  console.log(issues, 'Issues fetched from API');

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
                {issues?.map((issue, i) => (
                    <IssueCard key={i} {...issue} />
                ))}
            </div>

            <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />
        </div>
    );
};

export default Home;
