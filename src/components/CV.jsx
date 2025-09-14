import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CV = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cvRef = useRef(null);

  useEffect(() => {
    if (cvRef.current) {
      gsap.fromTo(
        cvRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cvRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const handleViewCV = () => {
    // Open CV in a new tab/window
    window.open('/cv.pdf', '_blank');
  };

  const handleDownloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Shubham_Kumar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={cvRef} className="relative">
      {/* Document Label */}
      <div className="text-center mb-4">
        <h3 className="text-white font-semibold text-lg flex items-center justify-center gap-2">
          📄 My Resume
        </h3>
        <p className="text-[#915EFF] text-sm font-medium">
          Click to view or download
        </p>
      </div>

      <motion.div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleViewCV}
      >
        {/* Document Preview */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-[280px] h-[360px] relative transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(145,94,255,0.3)]">
          {/* Document Header */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-3 border-b border-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-xs text-gray-600 ml-2 font-medium">📄 Shubham_Kumar_CV.pdf</span>
            </div>
          </div>

          {/* Document Content Preview */}
          <div className="p-4 h-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
            {/* Document Title */}
            <div className="text-center mb-4">
              <h1 className="text-lg font-bold text-gray-800 mb-1">SHUBHAM KUMAR</h1>
              <p className="text-sm text-[#915EFF] font-semibold">Full-Stack Engineer</p>
              <div className="w-16 h-0.5 bg-[#915EFF] mx-auto mt-2"></div>
            </div>

            {/* Document Sections */}
            <div className="space-y-3 text-xs text-gray-600">
              {/* Contact Info */}
              <div>
                <div className="h-2 bg-gray-800 rounded w-1/3 mb-1"></div>
                <div className="h-1.5 bg-gray-300 rounded w-full"></div>
                <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
              </div>
              
              {/* Experience Section */}
              <div className="mt-4">
                <div className="h-2 bg-gray-800 rounded w-1/2 mb-1"></div>
                <div className="h-1.5 bg-[#915EFF] rounded w-4/5 mb-1"></div>
                <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
                <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
              </div>

              {/* Skills Section */}
              <div className="mt-4">
                <div className="h-2 bg-gray-800 rounded w-1/3 mb-1"></div>
                <div className="flex gap-1 mb-1">
                  <div className="h-1.5 bg-[#915EFF] rounded w-16"></div>
                  <div className="h-1.5 bg-[#915EFF] rounded w-12"></div>
                  <div className="h-1.5 bg-[#915EFF] rounded w-20"></div>
                </div>
                <div className="flex gap-1">
                  <div className="h-1.5 bg-[#915EFF] rounded w-14"></div>
                  <div className="h-1.5 bg-[#915EFF] rounded w-18"></div>
                  <div className="h-1.5 bg-[#915EFF] rounded w-16"></div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="mt-4">
                <div className="h-2 bg-gray-800 rounded w-1/3 mb-1"></div>
                <div className="h-1.5 bg-gray-300 rounded w-4/5 mb-1"></div>
                <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>

            {/* Document Footer */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  📄 Page 1 of 2
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                  PDF
                </span>
              </div>
            </div>
          </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="text-white text-center">
                  <p className="text-lg font-semibold">📄 Resume</p>
                  <p className="text-sm opacity-90">Choose an option</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[200px]">
                  {/* View Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewCV();
                    }}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 text-sm flex-1"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View
                  </motion.button>

                  {/* Download Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownloadCV();
                    }}
                    className="bg-[#915EFF] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#7C3AED] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm flex-1"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(145,94,255,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download
                  </motion.button>
                </div>
              </div>
            </motion.div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#915EFF] to-[#4A00E0] rounded-lg blur-xl opacity-0 -z-10"
          animate={{
            opacity: isHovered ? 0.4 : 0,
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating Animation */}
        <motion.div
          className="absolute -top-2 -right-2 bg-[#915EFF] text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
          animate={{
            y: isHovered ? [-3, 0, -3] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          📄 PDF
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CV;