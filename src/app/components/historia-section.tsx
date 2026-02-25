
import imagenfromasstes from '../../assets/cumbal.jpg';
import { DecorativeBorder } from "./indigenous-pattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Mountain, Waves } from "lucide-react";
import ParallaxSection from "../components/ui/parallaxSection";
import cumbalImg from "../../assets/laguna.jpg";

export function HistoriaSection() {
  return (
    <>
      <ParallaxSection
        image={cumbalImg}
        heightClass="h-[138vh]"
        strength={500}
        overlayClass="bg-black/55"
        className="my-0"
      >
        <section id="historia" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl mb-4 inline-block"
                style={{ color: "white" }}
              >
                Cumbal
              </h2>
              <DecorativeBorder className="text-white/90" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Image */}
              <div className="relative order-2 md:order-1">
                <div
                  className="absolute -inset-4 rounded-2xl opacity-10"
                  style={{ backgroundColor: "var(--deep-green)" }}
                />

                <div className="relative overflow-hidden rounded-2xl group">

                  <ImageWithFallback
                    src={imagenfromasstes}
                    alt="Cumbal"
                    className="w-full h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />


                  {/* glow border */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/30 transition duration-500" />

                  {/* overlay suave */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  <a
                    href={"https://www.google.com/maps/search/?api=1&query=Parque%20principal%20de%20Cumbal%2C%20Nari%C3%B1o%2C%20Colombia"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs border border-white/15 hover:bg-white/20 transition"
                  >
                    Ver en Google Maps
                  </a>

                  {/* texto */}
                  <div className="absolute bottom-0 p-5">
                    <p className="text-white font-semibold text-lg drop-shadow">
                      Parroquia San Pedro Apóstol, Cumbal
                    </p>
                    <p className="text-white/80 text-sm">
                      Pasa el cursor para explorar
                    </p>
                  </div>

                </div>

                {/* Decorative Symbol Overlay */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "var(--ochre)" }}
                >
                  <BookOpen size={40} color="white" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 order-1 md:order-2">
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "white" }}
                >
                  Cumbal es un municipio ubicado en el sur del departamento de Nariño, reconocido por su riqueza cultural, sus tradiciones ancestrales y sus paisajes imponentes. Rodeado por los volcanes Cumbal y Chiles, el territorio se caracteriza por su biodiversidad, sus aguas termales, lagunas y sitios sagrados que han sido custodios de la memoria de los pueblos originarios.

                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "white" }}
                  >
                    Además de su belleza natural, Cumbal se distingue por la fuerza de su identidad comunitaria, reflejada en celebraciones como el Inti Raymi. Es un lugar donde la tierra, la cultura y la comunidad se entrelazan, transmitiendo un legado invaluable a las nuevas generaciones.
                  </p>
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-3"
                      style={{ backgroundColor: "var(--terracotta-light)" }}
                    >
                      <Mountain size={32} style={{ color: "var(--terracotta-dark)" }} />
                    </div>
                    <p className="text-sm" style={{ color: "white" }}>
                      Guardianes de la Tierra
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-3"
                      style={{ backgroundColor: "var(--terracotta-light)" }}
                    >
                      <Waves size={32} style={{ color: "var(--terracotta-dark)" }} />
                    </div>
                    <p className="text-sm" style={{ color: "white" }}>
                      Sabiduría Ancestral
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps?q=Cumbal,Nariño&output=embed"
              className="w-full h-[400px] rounded-2xl"
            />

          </div>

        </section>

      </ParallaxSection>

    </>
  );

}
