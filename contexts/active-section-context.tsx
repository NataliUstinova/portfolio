"use client";
import React, { useState, createContext, useContext } from "react";
import { TSectionName } from "@/lib/types";

type TActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type TActiveSectionContextType = {
  activeSection: TSectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<TSectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<TActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider = ({
  children,
}: TActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<TSectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
};
