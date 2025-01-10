import React from 'react';
import backgroundImage from '@/assets/backg.jpg'; // Import the image file
import { ArrowRight } from 'lucide-react'; // Import Arrow icon from lucide-react

const HeroSection = () => {
    return (
        <div
            className="relative flex items-center justify-start h-screen px-10 lg:px-20 border-b-0"
            style={{
                backgroundImage: `url(${backgroundImage})`, // Set the background image
                backgroundSize: 'cover', // Ensure the image covers the section
                backgroundPosition: 'center', // Center the image
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1a0a45]"></div>

            {/* Content */}
            <div className="relative z-10 max-w-xl text-left">
                <h1 className="text-6xl font-bold leading-tight text-white bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#00A3E0] to-[#90E0EF]">
                    Find Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]">Next Opportunity</span> Today at Skill<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]'>Bridge</span>
                </h1>

                {/* Description */}
                <p className="mt-4 text-2xl text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Discover incredible job opportunities, connect with top employers, and accelerate your career journey with us.
                </p>

                {/* Get Started Button */}
                <div className="mt-8">
                    <button
                        onClick={() => window.location.href = '#how-it-works'}
                        className="px-10 py-6 bg-white text-[#1a0a45] font-bold text-xl rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                        Get Started
                        <ArrowRight className="ml-3 h-5 w-5 text-[#1a0a45]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
