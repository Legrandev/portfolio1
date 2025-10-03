"use client"

export function StarryBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      {/* Petites étoiles */}
      <div className="stars-small" />
      {/* Étoiles moyennes */}
      <div className="stars-medium" />
      {/* Grandes étoiles */}
      <div className="stars-large" />

      <style jsx>{`
        .stars-small,
        .stars-medium,
        .stars-large {
          position: absolute;
          width: 1px;
          height: 1px;
          background: transparent;
          animation: twinkle 3s infinite;
        }

        .stars-small {
          box-shadow: 
            ${Array.from({ length: 200 }, () => `${Math.random() * 2000}px ${Math.random() * 1000}px #FFF`).join(", ")};
        }

        .stars-medium {
          width: 2px;
          height: 2px;
          box-shadow: 
            ${Array.from({ length: 100 }, () => `${Math.random() * 2000}px ${Math.random() * 1000}px #FFF`).join(", ")};
          animation-delay: 1s;
        }

        .stars-large {
          width: 3px;
          height: 3px;
          box-shadow: 
            ${Array.from({ length: 50 }, () => `${Math.random() * 2000}px ${Math.random() * 1000}px #FFF`).join(", ")};
          animation-delay: 2s;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
