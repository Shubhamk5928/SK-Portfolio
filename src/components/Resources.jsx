import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ResourceCard = ({
  index,
  title,
  description,
  tags,
  link,
  icon,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // ScrollTrigger for animating resource cards with stagger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
        onClick={() => {
          console.log('Card clicked, navigating to:', link);
          window.location.href = link;
        }}
      >
        <div className="relative w-full h-[200px] flex items-center justify-center">
          <div className="text-6xl mb-4">{icon}</div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-4 flex items-center text-[#915EFF] text-sm font-medium">
          <span>View Resource</span>
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </div>
      </Tilt>
    </div>
  );
};

const Resources = () => {
  useEffect(() => {
    // Stagger effect for resource cards
    gsap.fromTo(
      ".resource-card",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".resources-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  const resources = [
    {
      title: "Java Notes for DSA",
      description: "Comprehensive Java notes covering Data Structures and Algorithms concepts, implementations, and problem-solving techniques.",
      tags: [
        { name: "Java", color: "text-orange-400" },
        { name: "DSA", color: "text-blue-400" },
        { name: "Algorithms", color: "text-green-400" },
        { name: "Data Structures", color: "text-purple-400" },
      ],
      link: "/resource/javanotesfordsa.html",
      icon: "☕",
    },
  ];

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>Learning Resources</p>
        <h2 className={`${styles.sectionHeadText}`}>Resources & Notes.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          A collection of comprehensive notes and resources I've created to help with learning and understanding various programming concepts. These resources are designed to be practical and easy to follow.
        </p>
      </div>

      <div className="resources-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {resources.map((resource, index) => (
          <div key={`resource-${index}`} className="resource-card">
            <ResourceCard index={index} {...resource} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Resources, "resources");
