import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const headingRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Tech icons animation
    gsap.fromTo(
      ".tech-icon",
      {
        opacity: 0,
        y: 60,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const techVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "power3.out"
      }
    },
    hover: {
      scale: 1.1,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "power2.out"
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.6, 
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#915EFF]/20 to-[#4A00E0]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#4A00E0]/15 to-[#915EFF]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Code Symbols */}
        <motion.div
          className="absolute top-16 right-1/4 text-white/5 text-6xl font-mono"
          animate={{ 
            rotate: [0, 360],
            y: [0, -10, 0]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          &lt;/&gt;
        </motion.div>
        
        <motion.div
          className="absolute bottom-16 left-1/4 text-white/5 text-4xl font-mono"
          animate={{ 
            rotate: [360, 0],
            y: [0, 10, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        >
          { }
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={`${styles.sectionSubText} text-center`}>
            What I work with
          </p>
          <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent`}>
            Technologies.
          </h2>
          
          {/* Subtitle */}
          <motion.p
            className="mt-4 text-secondary text-[16px] max-w-2xl mx-auto leading-[24px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of modern technologies and frameworks that power my development workflow
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#4A00E0] rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          ref={wrapperRef}
          className="tech-icons-wrapper grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8 justify-items-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              className="relative group"
              variants={techVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredTech(technology.name)}
              onHoverEnd={() => setHoveredTech(null)}
            >
              {/* Glow Effect Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/20 to-[#4A00E0]/20 rounded-2xl blur-lg"
                variants={glowVariants}
                initial="hidden"
                animate={hoveredTech === technology.name ? "visible" : "hidden"}
              />
              
              {/* Tech Icon Container */}
              <motion.div
                className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
                whileHover={{
                  boxShadow: "0 10px 40px rgba(145, 94, 255, 0.3)"
                }}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="tech-icon w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              
              {/* Technology Name Tooltip */}
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap border border-white/10"
                initial={{ opacity: 0, y: -5 }}
                animate={{
                  opacity: hoveredTech === technology.name ? 1 : 0,
                  y: hoveredTech === technology.name ? 0 : -5
                }}
                transition={{ duration: 0.2 }}
                style={{ pointerEvents: 'none' }}
              >
                {technology.name}
                
                {/* Tooltip Arrow */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 border-l border-t border-white/10 rotate-45"></div>
              </motion.div>

              {/* Floating Indicator */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-[#915EFF] rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: hoveredTech === technology.name ? 1 : 0,
                  opacity: hoveredTech === technology.name ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-secondary">
            <div className="w-2 h-2 bg-[#915EFF] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{technologies.length}+ Technologies</span>
          </div>
          
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          
          <div className="flex items-center gap-2 text-secondary">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></div>
            <span className="text-sm font-medium">Always Learning</span>
          </div>
          
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          
          <div className="flex items-center gap-2 text-secondary">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
            <span className="text-sm font-medium">Production Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");