import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/contexts/active-section-context";
import type { TSectionName } from "@/lib/types";

type useSectionInViewProps = {
  sectionName: TSectionName;
  threshold?: number;
};

const useSectionInView = ({
  sectionName,
  threshold = 0.75,
}: useSectionInViewProps) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection]);
  return {
    ref,
  };
};

export default useSectionInView;
