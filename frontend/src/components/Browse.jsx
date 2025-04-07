import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useSelector } from 'react-redux';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
    const [query, setQuery] = useState(''); // Local state for the search query
    const [filteredJobs, setFilteredJobs] = useState([]); // Local state for filtered jobs
    const { allJobs } = useSelector(store => store.job); // Get all jobs from Redux
    const { user } = useSelector(store => store.auth); // Assuming there's a user in Redux or replace with your method

    useGetAllJobs();

    // Filter jobs based on the query (including title, company name, and description)
    useEffect(() => {
        const filtered = allJobs.filter((job) => {
            if (!query) {
                return true; // If no query, return all jobs
            }
            // Make the job text lowercase and check if the query matches
            const queryLower = query.toLowerCase();
            return (
                job.title.toLowerCase().includes(queryLower) ||
                job.company.name.toLowerCase().includes(queryLower) ||
                job.description.toLowerCase().includes(queryLower) // Add more fields if needed
            );
        });
        setFilteredJobs(filtered); // Set filtered jobs
    }, [allJobs, query]); // Re-run whenever `allJobs` or `query` changes

    return (
        <div style={{ backgroundColor: '#1A1A1A', minHeight: '100vh', overflowY: 'auto', paddingBottom: '20px' }}>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                {/* Page Title */}
                <h1
                    className="text-4xl font-semibold text-white mb-4 text-center"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                >
                    Browse Job Listings
                </h1>

                <h3 className="font-bold text-xl my-10 text-white text-center">
                    Search Results ({filteredJobs.length})
                </h3>

                {/* Search Bar */}
                <div className="mt-8 flex w-full mb-6 justify-center">
                    <input
                        type="text"
                        placeholder="Search for job titles, companies, or descriptions..."
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        className="w-full max-w-2xl px-6 py-4 text-lg text-white placeholder-[#6b7280] outline-none focus:ring-2 focus:ring-blue-500 rounded-lg shadow-lg border-2 border-[#00A3E0] transition-all duration-300 ease-in-out"
                        style={{
                            backgroundColor: '#1A1A1A',
                            fontFamily: 'Google Sans, sans-serif'
                        }}
                    />
                </div>

                {/* Display message if user is not logged in or no jobs */}
                {(!user) && (
                    <div className="text-center text-white my-6">
                        <p className="text-2xl font-semibold">Please login to see the job postings.</p>
                    </div>
                )}

                {/* Display message if no jobs found */}
                {(user && filteredJobs.length === 0) && (
                    <div className="text-center text-white my-6">
                        <p className="text-2xl font-semibold">No jobs found.</p>
                    </div>
                )}

                {/* Display Filtered Jobs */}
                {filteredJobs.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filteredJobs.map((job) => (
                            <Job key={job._id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Browse;
