import { useEffect, useRef } from 'react';

export default function useAnimatedMesh(canvasRef) {
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener('mousemove', handleMouse);

    // Create gradient orbs
    const orbs = [
      { x: 0.3, y: 0.3, r: 300, color: 'rgba(0, 212, 255, 0.08)', vx: 0.0003, vy: 0.0002 },
      { x: 0.7, y: 0.6, r: 350, color: 'rgba(124, 58, 237, 0.08)', vx: -0.0002, vy: 0.0003 },
      { x: 0.5, y: 0.8, r: 250, color: 'rgba(0, 212, 255, 0.05)', vx: 0.0002, vy: -0.0002 },
      { x: 0.2, y: 0.7, r: 200, color: 'rgba(124, 58, 237, 0.06)', vx: -0.0003, vy: -0.0001 },
    ];

    // Particles
    const particles = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let time = 0;
    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Draw gradient orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx + (mouseRef.current.x - 0.5) * 0.0002;
        orb.y += orb.vy + (mouseRef.current.y - 0.5) * 0.0002;

        // Wrap around
        if (orb.x < -0.2) orb.x = 1.2;
        if (orb.x > 1.2) orb.x = -0.2;
        if (orb.y < -0.2) orb.y = 1.2;
        if (orb.y > 1.2) orb.y = -0.2;

        const gx = orb.x * width;
        const gy = orb.y * height;
        const gradient = ctx.createRadialGradient(gx, gy, 0, gx, gy, orb.r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * (0.5 + Math.sin(time + p.x * 0.01) * 0.5)})`;
        ctx.fill();
      });

      // Draw subtle connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 120) * 0.06})`;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [canvasRef]);
}
