"use client"

export function StarryBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      <div className="stars"></div>

      <style jsx>{`
        .stars {
          width: 100%;
          height: 100%;
          background: black;
          background-image: 
            radial-gradient(white 1px, transparent 1px),
            radial-gradient(white 1px, transparent 1px),
            radial-gradient(white 1px, transparent 1px);
          background-repeat: repeat;
          background-size: 20px 20px, 40px 40px, 80px 80px;
          animation: twinkle 5s infinite alternate;
        }

        @keyframes twinkle {
          from { opacity: 0.7; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
