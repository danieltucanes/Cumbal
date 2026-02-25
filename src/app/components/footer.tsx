import { TribalDivider } from "./indigenous-pattern";
import { Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--brown-dark)" }}
    >
      {/* Tribal Divider at Top */}
      <div className="absolute top-0 left-0 right-0" style={{ color: "var(--ochre)" }}>
        <TribalDivider className="w-full h-10" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4" style={{ color: "var(--beige-light)" }}>
              Sobre Este Proyecto
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--beige)" }}>
              Este blog documenta dos años de trabajo colaborativo con la comunidad indígena,
              honrando su cultura, preservando su memoria y celebrando su identidad.
            </p>
            <div className="flex items-center gap-2" style={{ color: "var(--ochre)" }}>
              <Heart size={16} />
              <span className="text-sm" style={{ color: "var(--beige)" }}>
                Hecho con respeto y gratitud
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4" style={{ color: "var(--beige-light)" }}>
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={18} style={{ color: "var(--ochre)" }} className="mt-1" />
                <div>
                  <p className="text-sm" style={{ color: "var(--beige)" }}>
                    contacto@raicesancestrales.org
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: "var(--ochre)" }} className="mt-1" />
                <div>
                  <p className="text-sm" style={{ color: "var(--beige)" }}>
                    Territorio Ancestral
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div>
            <h3 className="text-xl mb-4" style={{ color: "var(--beige-light)" }}>
              Agradecimientos
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--beige)" }}>
              A los ancianos y ancianas que comparten su sabiduría, a las familias que abren
              sus hogares, y a toda la comunidad que hace posible este trabajo de memoria y dignidad.
            </p>
          </div>
        </div>

        {/* Decorative Pattern */}
        <div className="border-t py-6" style={{ borderColor: "var(--brown)" }}>
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rotate-45"
                style={{
                  backgroundColor: i % 2 === 0 ? "var(--terracotta)" : "var(--ochre)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm" style={{ color: "var(--beige)" }}>
            © 2026 Raíces Ancestrales. Proyecto de Documentación Cultural.
          </p>
          <p className="text-xs mt-2" style={{ color: "var(--sand)" }}>
            Todo el contenido se comparte con el consentimiento y colaboración de la comunidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
