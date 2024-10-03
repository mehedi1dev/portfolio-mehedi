import React, { useEffect, useRef } from "react";

const HeroComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
    }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        directionX: (Math.random() - 0.5) * 2,
        directionY: (Math.random() - 0.5) * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.directionX * 20, p.y + p.directionY * 20);
        ctx.stroke();

        p.x += p.directionX;
        p.y += p.directionY;

        if (p.x < 0 || p.x > canvas.width) p.directionX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.directionY *= -1;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900"
        id="hero"
      >
        <canvas ref={canvasRef} className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <h2 className="text-6xl sm:text-7xl font-bold text-white mb-4">
            MEHEDI
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Full-Stack Web Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="bg-white text-gray-900 py-2 px-6 rounded hover:bg-gray-200 transition-colors"
              href="#contact"
            >
              Contact Me
            </a>
            <a
              className="bg-transparent text-white py-2 px-6 rounded border border-white hover:bg-white hover:text-gray-900 transition-colors"
              href="https://drive.google.com/drive/folders/19OA_n8pdoxrL2zEbO2ZfNeRfz3S6o4C4?usp=sharing"
              target="_black"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
