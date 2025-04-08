import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    const hasJobs = allJobs && allJobs.length > 0;

    return (
        <div
            className='relative min-h-screen py-20 border-t border-white border-opacity-20'
            style={{
                background: 'linear-gradient(135deg, #2c3e50, #000000)',
                transition: 'background 1s ease-in-out',
                fontFamily: 'Times New Roman, serif'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#000000] to-[#2c3e50]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Title and Subtitle Section */}
                <div className="text-center mb-12">
                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#00A3E0] to-[#90E0EF] mb-2 sm:mb-4"
                        style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                        Latest & Top{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]">
                            Job Openings
                        </span>
                    </h1>
                    <h2
                        className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12"
                        style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                        Explore top job opportunities that align with your career goals.
                        <br />
                        Connect with leading employers and take your career to new heights.
                    </h2>
                </div>

                {/* Job Listings */}
                {!hasJobs ? (
                    <div className="flex items-center justify-center h-72">
                        <span className="text-white text-2xl text-center">Please wait to view job postings.</span>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
                        {
                            allJobs.slice(0, 6).map((job) => (
                                <LatestJobCards key={job._id} job={job} />
                            ))
                        }
                    </div>
                )}

                <div className='pb-20' />
            </div>
        </div>
    );
};

export default LatestJobs;
