import { DecorativeBorder } from "./indigenous-pattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Users } from "lucide-react";
import { AnimatedCounter } from "./ui/contador";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "../../libs/animations";
import PastosOrnament  from "../../libs/pastos-pattern.tsx";
import actividades from "../../assets/WhatsApp Image 2026-02-24 at 3.47.36 PM.jpeg";
import sol from "../../assets/Group 32.svg";

export function IntroduccionSection() {
  return (
    <motion.section
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      id="introduccion"
      className="py-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--beige-light)" }}
    >
      <motion.div variants={fadeUpItem} className="w-full relative z-10">
        <PastosOrnament  className="my-4" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        
        
        {/* Title */}
        <div className="text-center mb-14 relati">
          <motion.p variants={fadeUpItem}
            className="mb-3 text-xs sm:text-sm uppercase tracking-[0.35em]"
            style={{ color: "var(--terracotta-dark)" }}
          >
            Sobre el proyecto
          </motion.p>
           <motion.h2 variants={fadeUpItem}
          className="font-display text-4xl sm:text-5xl mb-5 tracking-[-0.01em]"
          style={{ color: "var(--terracotta-dark)" }}
        >
          Introducción
         
        </motion.h2>
  <img
            src={sol}
            alt=""
            className="absolute top-4 right-4 w-20 opacity-40"
          />
          

        </div>

         <motion.div variants={fadeUpItem} className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Inline header row (icon feels connected) */}
            <div className="flex items-center gap-4">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl"
                style={{ backgroundColor: "var(--terracotta)", color: "white" }}
              >
                <Users size={22} />
              </div>

              <div>
                <p
                  className="text-sm uppercase tracking-widest"
                  style={{ color: "var(--earth-text)" }}
                >
                  Comunidad y aprendizaje
                </p>
                <p className="text-xs opacity-70" style={{ color: "var(--earth-text)" }}>
                  Cumbal, Nariño
                </p>
              </div>
            </div>

            {/* Text (more editorial rhythm) */}
            <div className="max-w-xl">
              <p className="text-md leading-[1.9]" style={{ color: "var(--earth-text)" }}>
                Este sitio web presenta el proceso, desarrollo y resultados de un proyecto educativo y comunitario llevado a cabo durante casi dos años en el Resguardo Indígena del Gran Cumbal. La iniciativa tuvo como propósito principal fortalecer las capacidades educativas mediante el uso de herramientas tecnológicas, promoviendo un aprendizaje significativo dentro y fuera del aula.

A lo largo del proyecto, se implementaron diversas actividades orientadas al fortalecimiento de habilidades en lectura, escritura, matemáticas e inglés, utilizando programas y recursos digitales adaptados a las edades y necesidades de los estudiantes. Paralelamente, se integraron herramientas tecnológicas como apoyo para la valorización de los saberes propios del territorio, fomentando el reconocimiento de las costumbres, el cuidado del medio ambiente y la exploración del entorno desde una perspectiva cultural y educativa.

Adicionalmente, el proyecto contempló acciones para la mejora de los espacios físicos del centro educativo, mediante jornadas de restauración y adecuación que contribuyeron a crear ambientes más adecuados, seguros y agradables para la convivencia y el aprendizaje.

              </p>

              <p
                className="mt-6 text-lg leading-[1.9]"
                style={{ color: "var(--earth-text)" }}
              >
               Este espacio busca documentar las experiencias, aprendizajes y logros alcanzados, destacando el trabajo conjunto entre la comunidad y el equipo del proyecto, así como el impacto generado en el fortalecimiento educativo y cultural del territorio.

              </p>
            </div>

            {/* Stats Card (premium) */}
            <div
              className="rounded-2xl p-6 border backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.45)",
                borderColor: "rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center gap-3" style={{ color: "rgba(0,0,0,0.65)" }}>
                <Sparkles size={18} />
                <span className="text-sm uppercase tracking-widest">Actividades</span>
              </div>

              <div className="mt-3 text-4xl font-bold" style={{ color: "rgba(0,0,0,0.85)" }}>
                <AnimatedCounter to={10} durationMs={1500} suffix="+" />
              </div>

              <p className="mt-2 text-sm" style={{ color: "rgba(0,0,0,0.6)" }}>
                Talleres, encuentros y experiencias comunitarias.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Background frame (softer + cleaner) */}
            <ImageWithFallback
              src={actividades}
              alt="Actividades comunitarias"
              className="relative rounded-3xl shadow-xl w-full h-[420px] object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            />

          </div>
        </motion.div>
      </div>
       
    </motion.section>
  );
}