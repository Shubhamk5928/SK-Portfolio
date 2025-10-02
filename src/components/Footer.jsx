import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/Shubhamk5928/",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/Shubhamk5928",
      label: "Twitter",
      color: "hover:text-gray-300"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/Shubhamk5928/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: FaGithub,
      href: "https://github.com/Shubhamk5928/",
      label: "GitHub",
      color: "hover:text-gray-200"
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/u/shubhamk5928/",
      label: "LeetCode",
      color: "hover:text-orange-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.2,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.footer
      className="relative w-full py-12 bg-gradient-to-t from-black via-black/95 to-black/80 text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-[#915EFF] to-[#4A00E0] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-[#4A00E0] to-[#915EFF] rounded-full blur-3xl opacity-15"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Quote Section */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <blockquote className="text-lg md:text-xl font-light text-gray-300 mb-3 max-w-2xl">
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>
          <cite className="text-sm text-gray-400 font-medium">— Cory House</cite>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent mb-8"
          variants={itemVariants}
        ></motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 mb-8"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Name & Title */}
        <motion.div
          className="mb-6"
          variants={itemVariants}
        >
          <h4 className="text-xl font-semibold text-white mb-1">Shubham Kumar</h4>
          <p className="text-sm text-[#915EFF] font-medium">Full-Stack Engineer</p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="text-sm text-gray-400 mb-8 space-y-1"
          variants={itemVariants}
        >
          <p>Building tomorrow's web experiences today</p>
          <p>Gurugram, India</p>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="w-full pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <p>&copy; {currentYear} Shubham Kumar. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hidden md:block">Made with passion in India</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#915EFF] rounded-full animate-pulse"></div>
              <span>Available for freelance work</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-8 right-8 w-3 h-3 bg-[#915EFF] rounded-full opacity-60"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div
        className="absolute bottom-8 left-8 w-2 h-2 bg-white rounded-full opacity-40"
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
    </motion.footer>
  );
};

export default Footer;