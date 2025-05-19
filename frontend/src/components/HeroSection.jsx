import React from 'react';
import backgroundImage from '@/assets/backg.jpg';

const HeroSection = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <h1 className="text-5xl sm:text-7xl font-[Poppins,sans-serif] font-bold mb-4 text-white text-center leading-tight">
                Find your <span className="bg-purple-500 text-white px-2 py-0.5 rounded">next</span><br />
                opportunity today<br />
                at WorkSphere
            </h1>

            <p className="text-lg sm:text-xl font-[Poppins,sans-serif] text-white-300 mb-8 text-center max-w-2xl">
                Discover a variety of incredible internships and job opportunities, connect with top employers, and accelerate your career journey with us.
            </p>

            <button
                onClick={() => window.location.href = '#how-it-works'}
                className="px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
            >
                Get Started
            </button>
        </div>
    );
};

export default HeroSection;
