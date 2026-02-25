import { DecorativeBorder } from "./indigenous-pattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Users } from "lucide-react";
import { AnimatedCounter } from "./ui/contador";

export function IntroduccionSection() {
  return (
    <section id="introduccion" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--beige-light)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl mb-4 inline-block"
            style={{ color: "var(--terracotta-dark)" }}
          >
            Introducción
          </h2>
          <DecorativeBorder className="mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: "var(--terracotta)", color: "white" }}
            >
              <Users size={32} />
            </div>
            
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--earth-text)" }}
            >
              Este espacio digital reúne las experiencias, aprendizajes y reflexiones construidas a lo largo del proyecto desarrollado en el municipio de Cumbal. A través de actividades artísticas, pedagógicas y comunitarias —como la danza, la memoria alimentaria, el reconocimiento del territorio, la creación de una shagra escolar y el uso de herramientas tecnológicas— se busca fortalecer la identidad cultural, el sentido de pertenencia y el vínculo con nuestras raíces andinas. Este blog nace como un medio para compartir evidencias del trabajo realizado y proyectar la importancia de mantener vivos los saberes ancestrales en diálogo con las nuevas generaciones.
            </p>
            
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--earth-text)" }}
            >
              Cada actividad realizada, cada historia compartida y cada símbolo plasmado representa
              un acto de resistencia cultural y una celebración de la vida en comunidad. Este blog
              es testimonio de esa conexión profunda con la tierra, los antepasados y las
              generaciones futuras.
            </p>

             <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-black/70">
              <Sparkles size={20} />
              <span className="text-sm">Actividades</span>
            </div>
            <div className="mt-3 text-4xl font-bold">
              <AnimatedCounter to={10} durationMs={1500} suffix="+" />
            </div>
            <p className="mt-2 text-sm text-black/60">Talleres y encuentros.</p>
          </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl opacity-20"
              style={{ backgroundColor: "var(--terracotta)" }}
            />
            <ImageWithFallback
              src="src\assets\WhatsApp Image 2026-02-24 at 3.47.36 PM.jpeg"
              alt="Community unity"
              className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
