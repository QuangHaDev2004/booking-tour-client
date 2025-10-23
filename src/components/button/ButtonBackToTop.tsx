"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export const ButtonBackToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const dashArray = 2 * Math.PI * 21; // chu vi hình trõn

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;

      setScrollPercent(percent);
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    const start = window.scrollY;
    const duration = 1000;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start * (1 - ease));

      const currentScroll = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollPercent((currentScroll / docHeight) * 100);

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      <button
        onClick={handleBackToTop}
        className={`fixed right-[18px] bottom-8 h-[46px] w-[46px] cursor-pointer rounded-full transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"}`}
      >
        <svg width={46} height={46} viewBox="0 0 46 46">
          {/* Vòng tròn nền */}
          <circle
            strokeWidth={2}
            stroke="#F9F7F7"
            fill="none"
            r={21}
            cx={23} // tâm tọa độ hình tròn
            cy={23}
          />

          {/* Vòng tròn progress */}
          <circle
            strokeWidth={2}
            strokeDasharray={dashArray} // Độ dài nét đứt = chu vi của vòng tròn
            strokeDashoffset={dashArray - (dashArray * scrollPercent) / 100} // Khoảng trống để tạo hiệu ứng progress giảm/tăng
            stroke="#4502c7"
            fill="none"
            r={21}
            cx={23}
            cy={23}
            transform="rotate(-90 23 23)"
          />
        </svg>

        <FaArrowUp className="text-primary absolute top-1/2 left-1/2 -translate-1/2 text-[20px]" />
      </button>
    </>
  );
};
