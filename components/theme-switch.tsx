"use client";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/contexts/theme-context";
// @ts-ignore
import { gtag } from "ga-gtag";
import posthog from "posthog-js";
const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const handleClick = () => {
    toggleTheme();
    gtag("event", "theme_switch", {
      event_category: "theme",
      event_label: "theme_switch",
    });
    posthog.capture("theme_switch");
  };
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white 
      border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleClick}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
