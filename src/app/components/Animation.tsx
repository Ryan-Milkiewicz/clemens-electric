"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./animation.module.css";

export default function AnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(window.scrollY);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const scrollY = window.scrollY;
      const scrollingUp = scrollY < lastScrollY.current;
      lastScrollY.current = scrollY;

      // Slide in when entering viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        setVisible(true);
      }

      // Slide off ONLY if scrolling up AND element is leaving viewport through bottom
      if (scrollingUp && rect.top >= viewportHeight) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // trigger on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.slideIn} ${visible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
}
