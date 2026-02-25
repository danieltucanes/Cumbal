import { useEffect } from "react";
import { X } from "lucide-react";
import { DecorativeBorder } from "./indigenous-pattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Activity {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  date: string;
  image: string;
  participants?: string;
  location?: string;
}

interface ActivityModalProps {
  activity: Activity;
  onClose: () => void;
}

export function ActivityModal({ activity, onClose }: ActivityModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(74, 48, 38, 0.85)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Modal content */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-scaleIn"
        style={{
          backgroundColor: "var(--beige-light)",
          border: "4px solid var(--terracotta)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative pattern border at top */}
        <div
          className="absolute top-0 left-0 right-0 h-2"
          style={{
            background:
              "repeating-linear-gradient(90deg, var(--terracotta) 0px, var(--terracotta) 10px, var(--ochre) 10px, var(--ochre) 20px)",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{
            backgroundColor: "var(--terracotta-dark)",
            color: "white",
          }}
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative h-72 sm:h-96 overflow-hidden">
          <ImageWithFallback
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay at bottom of image */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{
              background:
                "linear-gradient(to top, var(--beige-light), transparent)",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Title */}
          <h2
            className="text-2xl sm:text-3xl mb-2"
            style={{ color: "var(--terracotta-dark)" }}
          >
            {activity.title}
          </h2>

          {/* Date badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "var(--sand)" }}>
            <span className="text-sm" style={{ color: "var(--brown)" }}>
              {activity.date}
            </span>
          </div>

          {/* Decorative divider */}
          <DecorativeBorder className="my-6" />

          {/* Description */}
          <div className="space-y-4">
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--brown)" }}
            >
              {activity.description}
            </p>

            {activity.detailedDescription && (
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--brown)" }}
              >
                {activity.detailedDescription}
              </p>
            )}

            {/* Additional info if available */}
            {(activity.participants || activity.location) && (
              <>
                <DecorativeBorder className="my-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activity.participants && (
                    <div>
                      <h4
                        className="text-sm mb-1"
                        style={{ color: "var(--terracotta)" }}
                      >
                        Participantes
                      </h4>
                      <p className="text-sm" style={{ color: "var(--brown)" }}>
                        {activity.participants}
                      </p>
                    </div>
                  )}
                  {activity.location && (
                    <div>
                      <h4
                        className="text-sm mb-1"
                        style={{ color: "var(--terracotta)" }}
                      >
                        Lugar
                      </h4>
                      <p className="text-sm" style={{ color: "var(--brown)" }}>
                        {activity.location}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Decorative bottom pattern */}
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div
                  className="w-3 h-3 rotate-45"
                  style={{ backgroundColor: "var(--terracotta)" }}
                />
                {i % 2 === 0 && (
                  <div
                    className="w-3 h-3 rotate-45"
                    style={{ backgroundColor: "var(--ochre)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative pattern border at bottom */}
        <div
          className="h-2"
          style={{
            background:
              "repeating-linear-gradient(90deg, var(--terracotta) 0px, var(--terracotta) 10px, var(--ochre) 10px, var(--ochre) 20px)",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
