import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "introduccion", label: "Introducción" },
    { id: "historia", label: "Cumbal" },
    { id: "cosmologia", label: "Cosmología e Identidad" },
    { id: "actividades", label: "Actividades" },
    { id: "galeria", label: "Galería" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-xl font-semibold tracking-wide"
            style={{ color: "var(--terracotta-dark)" }}
          >
            Cumbal: Identidad, Territorio y Aprendizaje
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: "var(--brown)" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            style={{ color: "var(--terracotta-dark)" }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--sand)" }}>
          <nav className="px-4 py-4 space-y-3 bg-white">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 rounded hover:bg-opacity-10 hover:bg-[var(--terracotta)]"
                style={{ color: "var(--brown)" }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
