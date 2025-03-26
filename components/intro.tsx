"use client";
import React from "react";
import Image from "next/image";
import { default as pic } from "@/public/about-me-pic.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useExperienceYears from "@/hooks/useExperienceYears";
import useSectionInView from "@/hooks/useSectionInView";
import { useActiveSectionContext } from "@/contexts/active-section-context";
// @ts-ignore
import { gtag } from "ga-gtag";
const Intro = () => {
  const experienceYears = useExperienceYears({ startYear: 2021 });
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.5 });

  return (
    <section ref={ref} id="home" className="scroll-mt-40">
      <div className="flex flex-col items-center justify-center mb-24 sm:mb-0">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Image
              src={pic}
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="rounded-full h-24 w-24 border-[0.25rem] border-white shadow-xl object-cover "
              alt="Natalia Ustinova fronted developer"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
        <motion.h1
          className="xl:max-w-[50%] text-center mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {`Hello, I'm `}
          <span className="font-bold">Natalia Ustinova.</span> {`I'm a`}{" "}
          <span className="font-bold">frontend developer</span> with{" "}
          <span className="font-bold">{experienceYears} years</span> of
          commercial experience. My focus is{" "}
          <span className="font-bold">React & Next.js</span>.
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
            hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all duration-300 ease-in-out"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
              gtag("event", "contact_me_button_click", {
                event_category: "contact_me_button_click",
                event_label: "contact_me_button_click",
              });
            }}
          >
            Contact me here
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
            hover:scale-110 border border-black/10 active:scale-105 transition-all duration-300 ease-in-out cursor-pointer dark:bg-white/10"
            href="/Natalia_Ustinova_Frontend_Developer_CV.pdf"
            download
            onClick={() => {
              gtag("event", "download_cv_button_click", {
                event_category: "download_cv_button_click",
                event_label: "download_cv_button_click",
              });
            }}
          >
            Download CV
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            className="group bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] text-gray-700 hover:text-gray-950 active:text-gray-950
            hover:scale-[1.15] border border-black/10 active:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/natalia-ustinova-frontend/"
            target="_blank"
            onClick={() => {
              gtag("event", "linkedin_button_click", {
                event_category: "linkedin_button_click",
                event_label: "linkedin_button_click",
              });
            }}
          >
            <BsLinkedin />
          </a>
          <a
            className="group bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] text-gray-700 hover:text-gray-950 active:text-gray-950
            hover:scale-[1.15] border border-black/10 active:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer dark:bg-white/10 dark:text-white/60"
            href="https://github.com/NataliUstinova"
            target="_blank"
            onClick={() => {
              gtag("event", "github_button_click", {
                event_category: "github_button_click",
                event_label: "github_button_click",
              });
            }}
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
