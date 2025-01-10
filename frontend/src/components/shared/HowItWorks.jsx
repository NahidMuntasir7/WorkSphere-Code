import React from 'react';
import { FaSearch, FaRegPaperPlane, FaUsers, FaCheckCircle } from 'react-icons/fa';
import backgroundImage from '@/assets/backgg.jpg'; // Import the image file
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();

  const navigateToBrowse = () => {
    navigate('/browse'); // Redirect to Browse Jobs
  };

  return (
    <section
      className="relative py-12 px-6 lg:px-20 border-t border-white border-opacity-20"
      id="how-it-works"
      style={{
        fontFamily: 'Times New Roman, serif', // Set font to Times New Roman
        backgroundImage: `url(${backgroundImage})`, // Apply the background image
        backgroundSize: 'cover', // Make sure the image covers the section
        backgroundPosition: 'center', // Center the image
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1a0a45]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1
          className="text-5xl font-bold leading-tight text-white bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#00A3E0] to-[#90E0EF] mb-4"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          How It{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]">
            Works
          </span>
        </h1>
        <h2
          className="text-2xl text-gray-300 mb-12"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          A simple guide to navigate your career journey with us.
        </h2>

        {/* Cards */}
        <div className="flex justify-center gap-6 mb-12">
          {[  
            {
              icon: <FaSearch />,
              title: 'Search',
              description: 'Discover job listings and opportunities tailored to your skills and preferences.',
            },
            {
              icon: <FaRegPaperPlane />,
              title: 'Apply',
              description: 'Submit your application with ease using our streamlined process.',
            },
            {
              icon: <FaUsers />,
              title: 'Connect',
              description: 'Network with leading employers and expand your professional connections.',
            },
            {
              icon: <FaCheckCircle />,
              title: 'Get Hired',
              description: 'Land your ideal job and embark on your new career journey.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-72 p-4 flex-shrink-0 transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
            >
              <div className="text-center bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-6 rounded-2xl shadow-xl h-64 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="mb-4">
                  {React.cloneElement(card.icon, { className: 'text-5xl text-white' })}
                </div>
                <h3
                  className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-gray-300 text-lg"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Browse Jobs Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={navigateToBrowse} // Redirect to Browse Jobs
            className="px-10 py-6 bg-white text-[#1a0a45] font-bold text-xl rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Browse Jobs
            <FaSearch className="ml-2 h-5 w-5 text-[#1a0a45]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
