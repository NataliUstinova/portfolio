"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { default as pic } from "@/public/about-me-pic.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useExperienceYears from "@/hooks/useExperienceYears";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/contexts/active-section-context";
const Intro = () => {
  const experienceYears = useExperienceYears({ startYear: 2022 });
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);
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
          className="xl:max-w-[55%] text-center mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {`Hello, I'm `}
          <span className="font-bold">Natalia Ustinova.</span>
          {`I'm a`} <span className="font-bold">frontend developer</span> based
          in Cyprus 🇨🇾 with{" "}
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
          >
            Contact me here
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
            hover:scale-110 border border-black/10 active:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            href="/CV.pdf"
            download
          >
            Download CV
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            className="group bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] text-gray-700 hover:text-gray-950 active:text-gray-950
            hover:scale-[1.15] border border-black/10 active:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
            href="https://www.linkedin.com/in/natalia-ustinova-03ba6a92/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="group bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] text-gray-700 hover:text-gray-950 active:text-gray-950
            hover:scale-[1.15] border border-black/10 active:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
            href="https://github.com/NataliUstinova"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
