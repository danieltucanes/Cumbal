import { IndigenousPattern } from "./indigenous-pattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cumbalImg from "../../assets/laguna.jpg";
import { motion, type Variants } from "framer-motion";
import PastosDivider  from "../../libs/pastos-pattern.tsx";


export function HeroSection() {
 const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={cumbalImg}
          alt="Laguna de la Bolsa, Cumbal"
          className="w-full h-full object-cover scale-[1.03]"
        />

        {/* Dark layer for contrast (keeps text readable) */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Softer tint (less heavy than 0.85) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(200, 90, 62, 0.28) 0%, rgba(61, 92, 79, 0.22) 100%)",
          }}
        />

        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_75%)]" />
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.12] mix-blend-overlay"
        style={{ color: "var(--beige)" }}
      >
        <IndigenousPattern className="w-full h-full" />
      </div>

      {/* Content */}
      <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
>


  <motion.p
    variants={item}
    className="mb-5 text-xs sm:text-sm uppercase tracking-[0.35em]"
    style={{ color: "var(--beige)" }}
  >
    Cumbal • Nariño • Colombia
  </motion.p>
   
  <motion.h1
    variants={item}
    className="font-display text-4xl sm:text-6xl lg:text-7xl mb-6 leading-[1.05] tracking-[-0.02em]"
    style={{ color: "var(--beige-light)" }}
  >
    Identidad, Territorio <br className="hidden sm:block" /> y Aprendizaje
  </motion.h1>

  <motion.p
    variants={item}
    className=" font-display tracking-[-0.01em] text-base sm:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-95"
    style={{ color: "var(--beige)" }}
  >
    Un espacio dedicado a documentar procesos de aprendizaje apoyados por herramientas
    tecnológicas y compartir la cultura, historia e identidad de nuestra comunidad ancestral.
  </motion.p>

  <motion.div
    variants={item}
    className="flex flex-wrap justify-center gap-4"
  >
    {/* your cards */}
    <div
            className="px-6 py-4 rounded-xl backdrop-blur-sm border"
            style={{
              backgroundColor: "rgba(232, 220, 200, 0.12)",
              borderColor: "rgba(232, 220, 200, 0.22)",
            }}
          >
            <p className="text-2xl font-semibold" style={{ color: "var(--beige-light)" }}>
              +2
            </p>
            <p className="text-xs uppercase tracking-widest" style={{ color: "var(--beige)" }}>
              Años de documentación
            </p>
          </div>

          <div
            className="px-6 py-4 rounded-xl backdrop-blur-sm border"
            style={{
              backgroundColor: "rgba(232, 220, 200, 0.12)",
              borderColor: "rgba(232, 220, 200, 0.22)",
            }}
          >
            <p className="text-2xl font-semibold" style={{ color: "var(--beige-light)" }}>
              Viva
            </p>
            <p className="text-xs uppercase tracking-widest" style={{ color: "var(--beige)" }}>
              Historia y memoria
            </p>
          </div>
  </motion.div>
  
</motion.div>
      

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: "var(--beige)" }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );

}


