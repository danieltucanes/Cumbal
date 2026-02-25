import { DecorativeBorder } from "./indigenous-pattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sun, Moon, Star, Sparkles } from "lucide-react";
import piedraMachines from "../../assets/4526-2_Piedra_Machines - copia.jpg";
import cumbalImg from "../../assets/laguna.jpg";


export function CosmologiaSection() {
  return (
    <section
      id="cosmologia"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "var(--deep-green-dark)" }}
    >
      {/* Starry Background Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl mb-4 inline-block"
            style={{ color: "var(--beige-light)" }}
          >
            Cosmología e Identidad
          </h2>
          <DecorativeBorder className="mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Spiritual Concepts */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed" style={{ color: "var(--beige)" }}>
              Nuestra cosmovisión entiende el universo como un todo integrado donde cada elemento
              tiene vida y propósito. El sol, la luna, las estrellas y la tierra no son objetos
              distantes, sino parentes espirituales que guían nuestro camino.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div
                className="p-6 rounded-xl backdrop-blur-sm transition-transform duration-500 ease-out hover:scale-110"
                style={{ backgroundColor: "rgba(212, 165, 116, 0.1)", border: "2px solid var(--ochre)" }}
              >
                <Sun size={40} className="mb-3 " style={{ color: "var(--ochre)" }} />
                <h3 className="mb-2" style={{ color: "var(--beige-light)" }}>
                  El Sol
                </h3>
                <p className="text-sm" style={{ color: "var(--beige)" }}>
                  Iconografía ancestral de 8 puntas que representa el tiempo, el espacio y la estructura social, cultural y económica.
                </p>
              </div>

              <div
                className="p-6 rounded-xl backdrop-blur-sm transition-transform duration-500 ease-out hover:scale-110"
                style={{ backgroundColor: "rgba(212, 165, 116, 0.1)", border: "2px solid var(--ochre)" }}
              >
                <Moon size={40} className="mb-3" style={{ color: "var(--ochre)" }} />
                <h3 className="mb-2" style={{ color: "var(--beige-light)" }}>
                  Sitios Sagrados
                </h3>
                <p className="text-sm" style={{ color: "var(--beige)" }}>
                  Sitios como la Piedra de los Monos, con pintura rupestre, son espacios de conexión espiritual y curación.
                </p>
              </div>

              <div
                className="p-6 rounded-xl backdrop-blur-sm transition-transform duration-500 ease-out hover:scale-110"
                style={{ backgroundColor: "rgba(212, 165, 116, 0.1)", border: "2px solid var(--ochre)" }}
              >
                <Star size={40} className="mb-3" style={{ color: "var(--ochre)" }} />
                <h3 className="mb-2" style={{ color: "var(--beige-light)" }}>
                  Dualidad
                </h3>
                <p className="text-sm" style={{ color: "var(--beige)" }}>
                  Se mantiene la visión de complementariedad (Arriba/Abajo, Izquierda/Derecha, Sol/Luna)
                </p>
              </div>

              <div
                className="p-6 rounded-xl backdrop-blur-sm transition-transform duration-500 ease-out hover:scale-110"
                style={{ backgroundColor: "rgba(212, 165, 116, 0.1)", border: "2px solid var(--ochre)" }}
              >
                <Sparkles size={40} className="mb-3" style={{ color: "var(--ochre)" }} />
                <h3 className="mb-2" style={{ color: "var(--beige-light)" }}>
                  La Tierra
                </h3>
                <p className="text-sm" style={{ color: "var(--beige)" }}>
                  La tierra es sagrada y fuente de vida. La salud se concibe como armonía entre el cuerpo, mente, espíritu y territorio.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Quote */}
          <div className="space-y-6">
            <div className="relative">
              <ImageWithFallback
                src={piedraMachines}
                alt="Spiritual cosmos and stars"
                className="rounded-2xl shadow-2xl w-full h-[350px] object-cover transition-transform duration-500 ease-out hover:scale-110"
              />
               <a
                href={"https://www.google.com/maps/search/?api=1&query=Piedra%20Machines%20de%20Cumbal%2C%20Nari%C3%B1o%2C%20Colombia"}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs border border-white/15 hover:bg-white/20 transition"
              >
                Ver en Google Maps
              </a>
            </div>
           

            <div
              className="p-8 rounded-xl"
              style={{ backgroundColor: "rgba(200, 90, 62, 0.15)", borderLeft: "4px solid var(--terracotta)" }}
            >
              <p className="text-lg italic leading-relaxed mb-4" style={{ color: "var(--beige-light)" }}>
                "“La cosmovisión del pueblo Pasto entiende el territorio como un ser vivo donde montañas como el Volcán Cumbal y el Volcán Chiles, y lugares sagrados como la Laguna de la Bolsa y la Piedra de Machines, guardan espíritus ancestrales que exigen equilibrio, respeto y armonía entre la comunidad, la naturaleza y lo espiritual.”."
              </p>
              <p className="text-sm" style={{ color: "var(--ochre)" }}>
                — Sabiduría ancestral
              </p>
            </div>
          </div>
        </div>
              
        {/* Identity Elements */}
        <div
          className="p-8 rounded-2xl backdrop-blur-sm"
          style={{ backgroundColor: "rgba(232, 220, 200, 0.05)" }}
        >
          <h3 className="text-2xl mb-8 text-center" style={{ color: "var(--beige-light)" }}>
            Pilares de Nuestra Identidad
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Lengua", desc: "Código ancestral de pensamiento" },
              { title: "Territorio", desc: "Espacio sagrado de vida" },
              { title: "Ceremonias", desc: "Conexión con lo espiritual" },
              { title: "Comunidad", desc: "Fuerza colectiva y unión" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "var(--ochre)" }}
                >
                  <span className="text-2xl" style={{ color: "var(--deep-green-dark)" }}>
                    {idx + 1}
                  </span>
                </div>
                <h4 className="mb-2" style={{ color: "var(--beige-light)" }}>
                  {item.title}
                </h4>
                <p className="text-sm" style={{ color: "var(--beige)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
