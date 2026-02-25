import { ReactNode, useEffect, useRef, useState } from "react";
interface ParallaxSectionProps {
  image: string;
  heightClass?: string;
  strength?: number;
  overlayClass?: string;
  className?: string;
  children?: ReactNode;
}
export default function ParallaxSection({
  image,
  heightClass = "h-[75vh]",
  strength = 90,
  overlayClass = "bg-black/40",
  className = "",
  children,
}: ParallaxSectionProps) {

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      const progress = (windowH - rect.top) / (windowH + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      const y = (clamped - 0.5) * strength;

      setOffset(y);
      rafId = requestAnimationFrame(update);
    };

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden grid place-items-center ${heightClass} ${className}`}
    >
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translate3d(0, ${offset}px, 0) scale(1.1)`,
        }}
      />

      <div className={`absolute inset-0 ${overlayClass}`} />

      <div className="relative z-10 w-[min(900px,92%)]">
        {children}
      </div>
    </section>
  );
}