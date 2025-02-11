import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SlideUp = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.remove("opacity-0");
          target.classList.add("animate-slide-up");
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="transition-all opacity-0">
      {children}
    </section>
  );
};
