import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import CV from "./CV";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div ref={paragraphRef} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1">
        <p className="mb-4">
          👋 Hi there! I'm <span className="font-semibold text-white">Shubham Kumar</span>, a passionate Full-Stack Engineer with <span className="font-semibold">2.5+ years</span> of hands-on experience crafting robust web applications.
        </p>
        
        <div className="mb-4">
          <span className="font-semibold text-white">🚀 Technical Expertise:</span>
          <br />
          • <span className="font-medium">MERN Stack</span> (MongoDB, Express, React, Node.js) 💻
          <br />
          • <span className="font-medium">Backend Technologies:</span> Redis, WebSockets, JWT, OAuth 🔧
          <br />
          • <span className="font-medium">API Development:</span> RESTful services & scalable architectures 🌐
        </div>

        <div className="mb-4">
          <span className="font-semibold text-white">🎯 Current Focus:</span>
          <br />
          Developing high-performance web applications powered by <span className="font-medium">AI agents</span> 🤖, solving complex problems while keeping user experience at the forefront ✨
        </div>

        <div className="mb-4">
          <span className="font-semibold text-white">💡 What I Bring:</span>
          <br />
          • Quick learner with adaptability 📚
          <br />
          • Strong collaboration with teams & clients 🤝
          <br />
          • Problem-solving mindset 🧩
          <br />
          • Focus on scalable, user-friendly solutions 📈
        </div>

        <p className="font-medium text-white">
          🎉 Let's work together to bring your ideas to life and build something awesome! 🚀
        </p>
        </div>

        {/* CV Component */}
        <div className="lg:mt-4 flex justify-center lg:justify-start">
          <CV />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");