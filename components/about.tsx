"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView({ sectionName: "About" });
  return (
    <motion.section
      ref={ref}
      id="About"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working in IT as a <span className="font-medium">Project</span> &{" "}
        <span className="font-medium">Content Manager</span> since 2015, I
        decided to pursue my passion for programming. I enrolled in a coding
        classes and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React.js, Next.js, Typescript.</span>I
        am always looking to learn new technologies. I am currently looking for
        a <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
};

export default About;
