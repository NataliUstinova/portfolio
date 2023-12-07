import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Onboarding UI library and Web Player",
    description:
      "UI components library and web player for the onboarding process. Used in projects with different color schemes and settings.",
    tags: ["React", "Tailwind", "themes", "webpack", "Framer"],
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/docs.sum/images/astrofy/onboarding.png",
  },
  {
    title: "Quicks Plugin",
    description:
      "I contributed to the development of the web plugin frontend. Worked on the landing page, onboarding process, payment integration, and the actual plugin frontend.",
    tags: ["React", "Tailwind", "Redux", "ChatGPT API", "AWS", "Paypro"],
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/docs.sum/images/Quick+Insights.jpg",
  },
  {
    title: "Newmoon Project",
    description:
      "I worked as a frontend developer on this project. Users can chat with an AI that uses the GPT-4 API.",
    tags: [
      "React",
      "Tailwind",
      "ChatGPT API",
      "Redux",
      "Websocket",
      "Solidgate",
    ],
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/docs.sum/images/astrofy/Astrological.jpg",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
