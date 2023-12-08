import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Natalia Ustinova.{" "}
      </small>
      <small className="font-semibold">About this website:</small>
      <p className="text-xs w-[min(100%,25rem)]">
        built with React & Next.js - App Router & Server Actions, TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
