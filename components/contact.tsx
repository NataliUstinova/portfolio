"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import useSectionInView from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import sendEmail from "@/actions/send-email";
import SubmitButton from "@/components/submit-btn";
import toast from "react-hot-toast";

const Contacts = () => {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    threshold: 0.5,
  });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please, contact me directly at{" "}
        <a href="mailto:nata@purple.studio">nata@purple.studio</a>
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack focus:outline-black"
          placeholder="Your email"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-black"
          placeholder="Your message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contacts;
