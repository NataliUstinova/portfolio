"use client";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { useEffect } from "react";
// @ts-ignore
import { install } from "ga-gtag";
export default function Home() {
  const GTAG = process.env.GTAG;
  useEffect(() => {
    install(GTAG);
  }, []);
  return (
    <main className="w-full flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
