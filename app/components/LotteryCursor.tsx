'use client';

import React, { useEffect, useRef } from 'react';

interface LotteryCursorOptions {
  element?: HTMLElement;
}

class MoneyParticle {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  lifeSpan: number;
  initialLifeSpan: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  emoji: string;

  constructor(x: number, y: number) {
    this.position = { x, y };
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 3),
      y: -0.5 - Math.random() * 1, // Initial upward velocity
    };
    this.lifeSpan = Math.floor(Math.random() * 60 + 60);
    this.initialLifeSpan = this.lifeSpan;
    this.size = 16 + Math.random() * 8; // Random size between 16-24px
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.1;
    const moneyEmojis = ['💰', '💵', '💸'];
    this.emoji = moneyEmojis[Math.floor(Math.random() * moneyEmojis.length)];
  }

  update(context: CanvasRenderingContext2D) {
    // Update position
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    
    // Apply gravity and wind effects
    this.velocity.y += 0.07; // Gravity
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75; // Wind
    
    // Update lifespan and rotation
    this.lifeSpan--;
    this.rotation += this.rotationSpeed;

    // Calculate opacity based on lifespan
    const opacity = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
    
    // Calculate size based on lifespan (grow slightly then shrink)
    const progress = 1 - (this.lifeSpan / this.initialLifeSpan);
    const scale = progress < 0.2 
      ? 0.5 + (progress * 2.5) // Grow during first 20%
      : 1 - ((progress - 0.2) * 0.5); // Shrink during remaining 80%
    
    // Draw the emoji
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.rotation);
    context.font = `${this.size * scale}px serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.globalAlpha = opacity;
    context.fillText(this.emoji, 0, 0);
    context.restore();
  }
}

const LotteryCursor: React.FC<LotteryCursorOptions> = ({ element }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<MoneyParticle[]>([]);
  const animationFrame = useRef<number | null>(null);
  const lastAddTime = useRef<number>(0);
  const prefersReducedMotion = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    // Check if window is defined (to ensure code runs on client-side)
    if (typeof window === 'undefined') return;

    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;

    const targetElement = element || document.body;

    canvas.style.position = element ? 'absolute' : 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999';

    targetElement.appendChild(canvas);
    canvasRef.current = canvas;

    const setCanvasSize = () => {
      canvas.width = element ? targetElement.clientWidth : window.innerWidth;
      canvas.height = element ? targetElement.clientHeight : window.innerHeight;
    };

    const addParticle = (x: number, y: number) => {
      // Add 1-3 particles at once for a more dramatic effect
      const count = Math.floor(Math.random() * 2) + 1;
      for (let i = 0; i < count; i++) {
        particles.current.push(new MoneyParticle(
          x + (Math.random() * 10 - 5), 
          y + (Math.random() * 10 - 5)
        ));
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      // Limit particle creation to every 100ms to avoid overwhelming the screen
      if (currentTime - lastAddTime.current < 100) return;
      
      lastAddTime.current = currentTime;
      
      const x = element
        ? e.clientX - targetElement.getBoundingClientRect().left
        : e.clientX;
      const y = element
        ? e.clientY - targetElement.getBoundingClientRect().top
        : e.clientY;
      
      addParticle(x, y);
    };

    const updateParticles = () => {
      if (!context || !canvas) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all particles
      particles.current.forEach((particle, index) => {
        particle.update(context);
        
        // Remove dead or off-screen particles
        if (particle.lifeSpan < 0 || 
            particle.position.y > canvas.height + 50 || 
            particle.position.x < -50 || 
            particle.position.x > canvas.width + 50) {
          particles.current.splice(index, 1);
        }
      });
    };

    const animationLoop = () => {
      updateParticles();
      animationFrame.current = requestAnimationFrame(animationLoop);
    };

    const init = () => {
      if (prefersReducedMotion.current?.matches) return;

      setCanvasSize();
      
      targetElement.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', setCanvasSize);

      animationLoop();
    };

    const destroy = () => {
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      targetElement.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', setCanvasSize);
    };

    prefersReducedMotion.current.onchange = () => {
      if (prefersReducedMotion.current?.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();
    return () => destroy();
  }, [element]);

  return null;
};

export default LotteryCursor;
