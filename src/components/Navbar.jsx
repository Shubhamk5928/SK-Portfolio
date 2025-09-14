import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to='/'
            className='flex items-center gap-3 group'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className='relative'>
              <img 
                src={logo} 
                alt='logo' 
                className='w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-300' 
              />
              <div className='absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#4A00E0] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
            </div>
            <div className='flex flex-col'>
              <p className='text-white text-[20px] font-bold cursor-pointer'>
                Shubham Kumar
              </p>
              <p className='text-[#915EFF] text-[12px] font-medium -mt-1'>
                MTS @GeeksforGeeks
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center'>
          <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl'>
            <ul className='list-none flex flex-row gap-8'>
              {navLinks.map((nav, index) => (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative group'
                >
                  <a
                    href={`#${nav.id}`}
                    className={`relative px-4 py-2 text-[16px] font-medium cursor-pointer transition-all duration-300 ${
                      active === nav.title 
                        ? "text-white" 
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setActive(nav.title)}
                  >
                    {nav.title}
                    {/* Active indicator */}
                    {active === nav.title && (
                      <motion.div
                        className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#4A00E0] rounded-full'
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {/* Hover effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-[#915EFF]/20 to-[#4A00E0]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='lg:hidden flex items-center'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 shadow-lg'
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-6 h-6 object-contain'
            />
          </motion.button>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ 
              opacity: toggle ? 1 : 0, 
              scale: toggle ? 1 : 0.8, 
              y: toggle ? 0 : -20 
            }}
            transition={{ duration: 0.3 }}
            className={`${
              !toggle ? "hidden" : "block"
            } absolute top-20 right-6 w-64 z-50`}
          >
            <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl'>
              <ul className='list-none flex flex-col gap-4'>
                {navLinks.map((nav, index) => (
                  <motion.li
                    key={nav.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className='group'
                  >
                    <a
                      href={`#${nav.id}`}
                      className={`block px-4 py-3 text-[16px] font-medium cursor-pointer rounded-lg transition-all duration-300 ${
                        active === nav.title 
                          ? "text-white bg-gradient-to-r from-[#915EFF] to-[#4A00E0]" 
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      {nav.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background blur effect */}
      <div className={`absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-300 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      } -z-10`}></div>
    </motion.nav>
  );
};

export default Navbar;
