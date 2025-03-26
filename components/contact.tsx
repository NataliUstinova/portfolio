"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import useSectionInView from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import sendEmail from "@/actions/send-email";
import SubmitButton from "@/components/submit-btn";
import toast from "react-hot-toast";
// @ts-ignore
import { gtag } from "ga-gtag";
import posthog from "posthog-js";

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
      <p className="text-gray-700 -mt-6 dark:text-white/70">
        Please, contact me directly at{" "}
        <a
          onClick={() => {
            gtag("event", "email_clicked", {
              event_category: "engagement",
              event_label: "email_clicked",
            });
          }}
          href="mailto:nata@purple.studio"
          className="font-semibold hover:opacity-80 active:opacity-80 dark:text-white/70 dark:hover:text-white dark:active:text-white"
        >
          nata@purple.studio
        </a>
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          // @ts-ignore
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          gtag("event", "email_sent", {
            event_category: "engagement",
            event_label: "email_sent",
          });
          posthog.capture("email_sent");
          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack focus:outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack focus:outline-black p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contacts;
