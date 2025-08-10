"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollUpSectionWise() {
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Store section positions on mount
  useEffect(() => {
    const secEls = Array.from(document.querySelectorAll("section"));
    setSections(secEls);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2; // middle of viewport
      const index = sections.findIndex((sec, i) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        return scrollY >= top && scrollY < bottom;
      });
      if (index !== -1) setCurrentIndex(index);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollToPrevSection = () => {
    if (currentIndex > 0) {
      sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToPrevSection}
      className="fixed bottom-6 right-6 md:bg-[#6E76FB]/30 bg-[#6E76FB] hover:bg-[#6E76FB] text-white md:p-4 p-2 cursor-pointer rounded-full shadow-lg duration-200"
    >
      <ArrowUp className="w-5 h-auto" />
    </button>
  );
}
