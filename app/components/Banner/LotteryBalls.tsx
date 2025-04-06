"use client"
import { useEffect, useRef, memo } from 'react';

const LotteryBalls = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationsRef = useRef<Animation[]>([]);
  
  const balls = [
    'ball0.avif',
    'ball10.avif',
    'bola2.avif',
    'ball21.avif',
    'ball22.avif',
    'bola13.avif',
    'ball29.avif',
    'bola7.avif',
    'bola11.avif',
    'bola13.avif'
  ];
  // Custom positions for each ball to create a scattered effect around text
  const positions = [
    { x: -325, y: 720, size: 170, delay: 0.5 },   // ball0 - top left
    { x: 320, y: -55, size: 165, delay: 1.2 },    // ball10 - top
    { x: 180, y: 30, size: 130, delay: 0.8 },    // bola2 - top right
    { x: 600, y: 20, size: 160, delay: 1.5 },     // ball21 - right
    { x: -775, y: 75, size: 90, delay: 0.3 },    // ball22 - bottom right
    { x: -155, y: 190, size: 65, delay: 2.0 },     // ball13 - bottom
    { x: -375, y: -230, size: 150, delay: 1.0 },  // ball29 - bottom left
    { x: -100, y: -350, size: 100, delay: 1.7 },    // bola7 - left
    { x: -35, y: 185, size: 150, delay: 0.6 },     // baola11 - inner left
    { x: 535, y: -500, size: 55, delay: 1.3 }       // bola13 - inner right
  ];

  useEffect(() => {
    // Cleanup previous animations
    return () => {
      animationsRef.current.forEach(anim => anim.cancel());
    };
  }, []);

  useEffect(() => {
    // Add floating animation
    const ballElements = containerRef.current?.querySelectorAll('img');
    if (ballElements) {
      ballElements.forEach((ball, index) => {
        const yMovement = 10 + Math.random() * 8; // Random movement between 10-18px
        const animation = ball.animate(
          [
            { transform: `translate(${positions[index].x}%, ${positions[index].y}%) translateY(-${yMovement}px)` },
            { transform: `translate(${positions[index].x}%, ${positions[index].y}%) translateY(${yMovement}px)` },
            { transform: `translate(${positions[index].x}%, ${positions[index].y}%) translateY(-${yMovement}px)` }
          ],
          {
            duration: 5000 + Math.random() * 3000, // Random duration between 5-8s
            iterations: Infinity,
            easing: 'ease-in-out',
            delay: positions[index].delay * 1000
          }
        );
        animationsRef.current.push(animation);
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
      {balls.map((ball, index) => (
        <img
          key={ball}
          src={`https://betsol-web.s3.us-east-2.amazonaws.com/${ball}`}
          alt={`Lottery ball ${ball}`}
          className="absolute rounded-full"
          style={{
            width: `${positions[index].size}px`,
            height: `${positions[index].size}px`,
            left: '50%',
            top: '50%',
            transform: `translate(${positions[index].x}%, ${positions[index].y}%)`,
            transition: 'transform 0.3s ease-in-out',
            zIndex: '1',
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
          loading="eager"
          decoding="async"
        />
      ))}
    </div>
  );
});

LotteryBalls.displayName = 'LotteryBalls';
export default LotteryBalls;
