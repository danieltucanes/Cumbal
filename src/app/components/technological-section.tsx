import { DecorativeBorder } from "./indigenous-pattern";
import { Map, Palette, Gamepad2, Languages, Laptop, Sparkles, Database } from "lucide-react";
import GComprisLogo from "../../assets/Gcompris-logo.png";
import GoogleEarth from "../../assets/GoogleEarthIcon.png";
import TuxPaintLogo from "../../assets/TuxPaint-logo.png";
import DuolingoLogo from "../../assets/Duolingo-logo.png";
import SIALEMLogo from "../../assets/sialen.png";
import YourubeLogo from "../../assets/Youtube_logo.png";
import PastosOrnament  from "../../libs/pastos-pattern.tsx";
import CanvaLogo from "../../assets/Canva-logo.png";
import CapcutLogo from "../../assets/CapCut-logo.png";
import WordLogo from "../../assets/Word-logo.png";
import { fadeUpContainer, fadeUpItem } from "../../libs/animations.ts";
import { motion } from "framer-motion";

export function TecnologiaSection() {
  const tools = [
    {
      title: "Google Earth",
      logo: GoogleEarth,
      desc: "Exploración del territorio y reconocimiento de sitios sagrados.",
      tag: "Territorio",
    },
    {
      title: "TuxPaint",
      logo: TuxPaintLogo,
      desc: "Creatividad y expresión artística digital basada en el entorno.",
      tag: "Arte",
    },
    {
      title: "GCompris",
      logo: GComprisLogo,
      desc: "Refuerzo lúdico de lectoescritura y matemáticas en primaria.",
      tag: "Aprendizaje",
    },
    {
      title: "Duolingo",
      logo: DuolingoLogo,
      desc: "Introducción al inglés mediante actividades interactivas.",
      tag: "Lengua",
    },
    {
      title: "SIALEM",
      logo: SIALEMLogo,
      desc: "Utilizado para fortalecer habilidades de lectura, escritura y comprensión.",
      tag: "Educación"
    },
    {
      title: "YouTube",
      logo: YourubeLogo,
      desc: "Utilizado para compartir videos educativos y documentales sobre la cultura local.",
      tag: "Multimedia"
    },
    {
      title: "Canva",
      logo: CanvaLogo,
      desc: "Plataforma especializada para crear contenido visual atractivo .",
      tag: "Multimedia"
    },
    {
      title: "Capcut",
      logo: CapcutLogo,
      desc: "Herramienta útil para crear contenido visual sobre la cultura local.",
      tag: "Multimedia"
    },
    {
      title: "Word",
      logo: WordLogo,
      desc: "Perimtió la creación de guías y documentos para afianzar conocimientos .",
      tag: "Creación y Edición"
    }

  ];

  const steps = [
    {
      title: "Exploramos el territorio",
      desc: "Usamos mapas y recorridos virtuales para ubicar lugares importantes y comprender el espacio.",
    },
    {
      title: "Creamos y representamos",
      desc: "Los estudiantes expresan el entorno que les rodea con herramientas de dibujo digital.",
    },
    {
      title: "Aprendemos jugando",
      desc: "Actividades interactivas fortalecen habilidades básicas (lectura, escritura, números e idiomas).",
    },
    {
      title: "Apoyamos el aprendizaje",
      desc: "Creamos guías y contenido audiovisual utilizando herramientas tecnológicas para aprender .",
    },
    {
      title: "Compartimos evidencias",
      desc: "Documentamos procesos para conservar la memoria del proyecto y aprender en comunidad.",
    },

  ];

  const stats = [
    { value: "13+", label: "Actividades realizadas" },
    { value: "4", label: "Herramientas digitales clave" },
    { value: "1", label: "Comunidad educativa" },
    { value: "2+", label: "Años de documentación" },
  ];

  return (
    <motion.section
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      id="tecnologia"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--beige-light)" }}
      >

        <motion.div variants={fadeUpItem} className="w-full relative z-10">
              <PastosOrnament  className="my-4" />
            </motion.div>
      

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <motion.p
            variants={fadeUpItem}
            className="mb-3 text-xs sm:text-sm uppercase tracking-[0.35em]"
            style={{ color: "var(--terracotta-dark)" }}
          >
            Tecnología + cultura + aprendizaje
          </motion.p>

          <motion.h2
            variants={fadeUpItem}
            className="font-display text-4xl sm:text-5xl mb-5 tracking-[-0.01em]"
            style={{ color: "var(--terracotta-dark)" }}
          >
            Tecnología para el Aprendizaje Comunitario
          </motion.h2>

          <motion.div variants={fadeUpItem} className="flex justify-center">
            <DecorativeBorder className="mt-2 opacity-80" />
          </motion.div>

          <motion.p variants={fadeUpItem} className="mt-6 text-lg max-w-3xl mx-auto leading-[1.9]" style={{ color: "var(--brown)" }}>
            En este proyecto, las herramientas digitales se utilizan como aliadas del aprendizaje y la
            preservación cultural. A través de actividades prácticas, los estudiantes exploran su territorio,
            fortalecen habilidades académicas y documentan experiencias de su comunidad.
          </motion.p>

          
        </div>

        {/* Tools + Steps */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Tools */}
          <div >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                variants={fadeUpItem}
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(200, 90, 62, 0.14)", color: "var(--terracotta-dark)" }}
              >
                   <Laptop size={22} />
              </motion.div>
              <motion.h3 
              variants={fadeUpItem}
              className="text-2xl font-semibold" 
              style={{ color: "var(--terracotta-dark)" }}>
                Herramientas que usamos
              </motion.h3>
            </div>

            
              <motion.div
                variants={fadeUpItem}
                className="grid lg:grid-cols-2 gap-8">
                {tools.map((t) => (
                  <div
                    key={t.title}
                      className="rounded-2xl p-3 border shadow-sm transition hover:-translate-y-1 hover:shadow-lg h-full"                    
                      style={{
                      backgroundColor: "rgba(255, 255, 255, 0.78)",
                      borderColor: "rgba(0,0,0,0.08)",
                    }}
                  >
                     <span
                          className="text-xs px-3 py-1 rounded-full border font-semibold mb-1 inline-block"
                          style={{
                            backgroundColor: "rgba(212, 165, 116, 0.10)",
                            color: "var(--terracotta-dark)",
                            borderColor: "rgba(0,0,0,0.08)",
                          }}
                        >
                          {t.tag}
                        </span>

                    <div className="flex items-center gap-3">
                      
                      {/* Logo - Izquierda */}
                      <div
                        className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
                        style={{ backgroundColor: "rgba(232, 220, 200, 0)" }}
                      >
                        
                        <img src={t.logo} alt={`${t.title} logo`} className="w-20 h-20 object-contain" />
                      </div>

                      {/* Contenido - Derecha */}
                      <div className="flex-1">
                       

                        <h4 className="text-lg font-bold" style={{ color: "var(--terracotta-dark)" }}>
                          {t.title}
                        </h4>
                        <p className="mt-6 text-sm leading-relaxed" style={{ color: "rgba(66, 64, 64, 0.76)" }}>
                          {t.desc}
                        </p>

                        
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

            
          
          </div>

          {/* Steps */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                variants={fadeUpItem}
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(61, 92, 79, 0.14)", color: "var(--deep-green-dark)" }}
              >
                <Sparkles size={22} />
              </motion.div>
              <motion.h3 
              variants={fadeUpItem}
              className="text-2xl font-semibold" 
              style={{ color: "var(--terracotta-dark)" }}>
                ¿Cómo la usamos?
              </motion.h3>
            </div>

            <motion.div
              variants={fadeUpItem}
              className="space-y-4">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-6 border transition hover:-translate-y-1 hover:shadow-lg gap: 20px o 24px"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.55)",
                    borderColor: "rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="flex items-start gap-4 ">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 "
                      style={{ backgroundColor: "rgba(200, 90, 62, 0.12)", color: "var(--terracotta-dark)" }}
                    >
                      <span className="font-semibold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold" style={{ color: "var(--terracotta-dark)" }}>
                        {s.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--brown)" }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
              

          </div>
              
        </div >
        
          
         <motion.div
              variants={fadeUpItem} 
              className="text-center mb-10 ease-in-out">
           {/* Reflection quote */}
          <div
            className="mt-6 max-w-2xl mx-auto rounded-2xl p-5 border "
            style={{
              backgroundColor: "rgba(200, 90, 62, 0.10)",
              borderColor: "rgba(200, 90, 62, 0.25)",
            }}
          >
            <p className="text-lg italic leading-[1.9]" style={{ color: "var(--terracotta-dark)" }}>
              “La tecnología no reemplaza los saberes ancestrales; se convierte en una herramienta para
              fortalecerlos, preservarlos y transmitirlos a las nuevas generaciones.”
            </p>
            <p className="mt-3 text-sm" style={{ color: "var(--brown)" }}>
              — Reflexión del proyecto
            </p>
          </div>

         </motion.div>
         
       
      </div>
    </motion.section>
  );
}