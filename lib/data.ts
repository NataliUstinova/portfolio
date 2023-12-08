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
    title: "Graduated Web Development Course",
    location: "Yandex EdTech",
    description:
      "I graduated after 18 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Limassol, Cyprus",
    description:
      "I worked as a front-end developer for 2 years. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time remote opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
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
  "Redux",
  "RTK Query",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "AWS",
  "MS AZURE",
  "Solidgate",
  "Paypro",
  "ChatGPT API",
  "Websocket",
  "Webpack",
  "Figma",
] as const;
