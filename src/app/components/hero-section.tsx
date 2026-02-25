import { IndigenousPattern } from "./indigenous-pattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cumbalImg from "../../assets/laguna.jpg";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={cumbalImg}
          alt="Laguna de la Bolsa, Cumbal"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(200, 90, 62, 0.85) 0%, rgba(61, 92, 79, 0.85) 100%)",
          }}
        />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-20" style={{ color: "var(--beige)" }}>
        <IndigenousPattern className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="mx-auto mb-8"
            style={{ color: "var(--beige)" }}
          >
            
          </svg>
        </div>
        
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-wide"
          style={{ color: "var(--beige-light)" }}
        >Cumbal: Identidad, Territorio y Aprendizaje</h1>
        
        <p
          className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--beige)" }}
        >
          Un espacio dedicado a documentar, celebrar y compartir la cultura, historia e identidad
          de nuestra comunidad ancestral
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 rounded-lg backdrop-blur-sm" style={{ backgroundColor: "rgba(232, 220, 200, 0.2)" }}>
            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--beige-light)" }}>
              2 Años de Documentación
            </p>
          </div>
          <div className="px-6 py-3 rounded-lg backdrop-blur-sm" style={{ backgroundColor: "rgba(232, 220, 200, 0.2)" }}>
            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--beige-light)" }}>
              Historia Viva
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
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
