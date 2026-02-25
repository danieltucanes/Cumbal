import { DecorativeBorder } from "./indigenous-pattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CalendarDays, Camera, Sparkles, Users } from "lucide-react";
import { AnimatedCounter } from "./ui/contador";

import GuardianesDelAgua from "../../assets/Guardianes del agua.jpeg";
import ExploradoresDeCumbal from "../../assets/Exploradores-de-Cumbal.jpeg";
import Shagra from "../../assets/shagra.jpeg";
import Restauracion from "../../assets/restauración.jpeg";
import Lectoescritura from "../../assets/lectoescritura.jpeg";
import Matematicas from "../../assets/matematicas.jpeg";
import Manualidades from "../../assets/manualidades.jpeg";
import Tuxpaint from "../../assets/tuxpaint.jpeg";
import Ingles from "../../assets/ingles.jpeg";
import RestauracionEcologica from "../../assets/restauracion.jpeg";
import Encuesta from "../../assets/encuesta.jpeg";
import Alfabetizacion from "../../assets/alfabetizacion.jpeg";
import Siembra from "../../assets/siembra.jpeg";

const galleryImages = [
  {
    id: 1,
    src: Encuesta,
    title: "Encuesta a la comunidad",
  },
  {
    id: 2,
    src: Alfabetizacion,
    title: "Alfabetización Digital",
  },
  {
    id: 3,
    src: Siembra,
    title: "Siembra de Árboles",
  },
  {
    id: 4,
    src: Manualidades,
    title: "Cerámica Ancestral",
  },
  {
    id: 5,
    src: ExploradoresDeCumbal,
    title: "Actividad: Exploradores de Cumbal",
  },
  {
    id: 6,
    src: GuardianesDelAgua,
    title: "Actividad: Guardianes del Agua",
  },
  {
    id: 7,
    src: Ingles,
    title: "Taller Inglés para niños",
  },
  {
    id: 8,
    src: Lectoescritura,
    title: "Taller Lectoescritura",
  },
   {
    id: 9,
    src: Matematicas,
    title: "Taller Matemáticas",
  },
  {
    id: 10,
    src: Shagra,
    title: "Creación Shagra Estudiantil",
  },
   {
    id: 11,
    src: Tuxpaint,
    title: "Taller TuxPaint",
  },
  {
    id: 12,
    src: RestauracionEcologica,
    title: "Restauración Símbolos Culturales",
  },
];

export function GaleriaSection() {
  return (
    <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl mb-4 inline-block"
            style={{ color: "var(--terracotta-dark)" }}
          >
            Galería
          </h2>
          <DecorativeBorder className="mt-6" />
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "var(--brown)" }}>
            Momentos capturados de nuestra vida comunitaria y prácticas culturales
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              style={{
                border: "3px solid var(--sand)",
                aspectRatio: index === 0 || index === 7 ? "1/1.3" : "1/1",
              }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
              >
                <div className="p-4 w-full">
                  <h3 className="text-white text-lg">{image.title}</h3>
                  <div className="flex gap-1 mt-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--ochre)" }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div
                className="absolute top-0 right-0 w-12 h-12"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, var(--terracotta) 50%)`,
                  opacity: 0.3,
                }}
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Impacto</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-black/70">
              <CalendarDays size={20} />
              <span className="text-sm">Duración</span>
            </div>
            <div className="mt-3 text-4xl font-bold">
              <AnimatedCounter to={2} durationMs={1000} suffix=" años" />
            </div>
            <p className="mt-2 text-sm text-black/60">Trabajo continuo con la comunidad.</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-black/70">
              <Camera size={20} />
              <span className="text-sm">Fotografías</span>
            </div>
            <div className="mt-3 text-4xl font-bold">
              <AnimatedCounter to={10} durationMs={1500} suffix="+" />
            </div>
            <p className="mt-2 text-sm text-black/60">Acumuladas en actividades.</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-black/70">
              <Sparkles size={20} />
              <span className="text-sm">Actividades</span>
            </div>
            <div className="mt-3 text-4xl font-bold">
              <AnimatedCounter to={24} durationMs={1500} suffix="+" />
            </div>
            <p className="mt-2 text-sm text-black/60">Talleres, encuentros y recorridos.</p>
          </div>
        </div>
      </div>
    </section>
      </div>
    </section>
  );
}
