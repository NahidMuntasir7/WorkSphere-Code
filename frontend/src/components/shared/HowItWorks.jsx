// import React from 'react';
// import { FaSearch, FaRegPaperPlane, FaUsers, FaCheckCircle } from 'react-icons/fa';
// import backgroundImage from '@/assets/backgg.jpg'; // Import the image file
// import { useNavigate } from 'react-router-dom';

// const HowItWorks = () => {
//   const navigate = useNavigate();

//   const navigateToBrowse = () => {
//     navigate('/browse'); // Redirect to Browse Jobs
//   };

//   return (
//     <section
//       className="relative py-8 px-4 sm:py-12 sm:px-6 lg:px-20 border-t border-white border-opacity-20"
//       id="how-it-works"
//       style={{
//         fontFamily: 'Times New Roman, serif',
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1a0a45]"></div>

//       <div className="relative z-10 max-w-5xl mx-auto text-center">
//         <h1
//           className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#00A3E0] to-[#90E0EF] mb-2 sm:mb-4"
//           style={{ fontFamily: 'Times New Roman, serif' }}
//         >
//           How It{' '}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]">
//             Works
//           </span>
//         </h1>
//         <h2
//           className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12"
//           style={{ fontFamily: 'Times New Roman, serif' }}
//         >
//           A simple guide to navigate your career journey with us.
//         </h2>

//         {/* Cards */}
//         <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
//           {[
//             {
//               icon: <FaSearch />,
//               title: 'Search',
//               description: 'Discover job listings and opportunities tailored to your skills and preferences.',
//             },
//             {
//               icon: <FaRegPaperPlane />,
//               title: 'Apply',
//               description: 'Submit your application with ease using our streamlined process.',
//             },
//             {
//               icon: <FaUsers />,
//               title: 'Connect',
//               description: 'Network with leading employers and expand your professional connections.',
//             },
//             {
//               icon: <FaCheckCircle />,
//               title: 'Get Hired',
//               description: 'Land your ideal job and embark on your new career journey.',
//             },
//           ].map((card, index) => (
//             <div
//               key={index}
//               className="w-full sm:w-72 p-3 sm:p-4 flex-shrink-0 transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
//             >
//               <div className="text-center bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl h-56 sm:h-64 flex flex-col items-center justify-center relative overflow-hidden">
//                 <div className="mb-2 sm:mb-4">
//                   {React.cloneElement(card.icon, { className: 'text-4xl sm:text-5xl text-white' })}
//                 </div>
//                 <h3
//                   className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]"
//                   style={{ fontFamily: 'Times New Roman, serif' }}
//                 >
//                   {card.title}
//                 </h3>
//                 <p
//                   className="text-gray-300 text-sm sm:text-lg"
//                   style={{ fontFamily: 'Times New Roman, serif' }}
//                 >
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Browse Jobs Button */}
//         <div className="mt-4 sm:mt-6 flex justify-center">
//           <button
//             onClick={navigateToBrowse}
//             className="px-6 sm:px-10 py-4 sm:py-6 bg-white text-[#1a0a45] font-bold text-lg sm:text-xl rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//           >
//             Browse Jobs
//             <FaSearch className="ml-2 h-4 sm:h-5 w-4 sm:w-5 text-[#1a0a45]" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



import React from 'react';
import { FaSearch, FaRegPaperPlane, FaUsers, FaCheckCircle } from 'react-icons/fa';
import backgroundImage from '@/assets/backgg.jpg';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();

  const navigateToBrowse = () => {
    navigate('/browse');
  };

  return (
    <section
      className="relative py-8 px-4 sm:py-12 sm:px-6 lg:px-20 border-t border-white border-opacity-20"
      id="how-it-works"
      style={{
        fontFamily: 'Times New Roman, serif',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1a0a45]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#00A3E0] to-[#90E0EF] mb-2 sm:mb-4"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          How It{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]">
            Works
          </span>
        </h1>
        <h2
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          A simple guide to navigate your career journey with us.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 sm:mb-12 max-w-6xl mx-auto">
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
              className="transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
            >
              <div className="text-center bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-6 rounded-2xl shadow-xl h-56 sm:h-64 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="mb-4">
                  {React.cloneElement(card.icon, { className: 'text-4xl sm:text-5xl text-white' })}
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-gray-300 text-sm sm:text-lg"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Browse Jobs Button */}
        <div className="mt-4 sm:mt-6 flex justify-center">
          <button
            onClick={navigateToBrowse}
            className="px-6 sm:px-10 py-4 sm:py-6 bg-white text-[#1a0a45] font-bold text-lg sm:text-xl rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Browse Jobs
            <FaSearch className="ml-2 h-4 sm:h-5 w-4 sm:w-5 text-[#1a0a45]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;



