import React from 'react';
import backgroundImage from '@/assets/backg.jpg'; // Import the image file
import { ArrowRight } from 'lucide-react'; // Import Arrow icon from lucide-react

const HeroSection = () => {
    return (
        <div
            className="relative flex items-center justify-start h-[70vh] sm:h-screen px-4 sm:px-6 md:px-10 lg:px-20 border-b-0"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1a0a45]"></div>

            {/* Content */}
            <div className="relative z-10 max-w-md sm:max-w-lg md:max-w-xl text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#00A3E0] to-[#90E0EF]">
                    Find Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]">Next Opportunity</span> Today at Work<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]'>Sphere</span>
                </h1>

                {/* Description */}
                <p className="mt-2 sm:mt-4 text-lg sm:text-xl lg:text-2xl text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Discover a variety of incredible internships and job opportunities, connect with top employers, and accelerate your career journey with us.
                </p>

                {/* Get Started Button */}
                <div className="mt-4 sm:mt-6 lg:mt-8">
                    <button
                        onClick={() => window.location.href = '#how-it-works'}
                        className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white text-[#1a0a45] font-bold text-base sm:text-lg lg:text-xl rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                        Get Started
                        <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5 text-[#1a0a45]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;




