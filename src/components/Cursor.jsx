import React, { useEffect, useRef, useState, memo } from 'react';

const MouseTrailer = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const circlesRef = useRef([]);
  const animationFrameRef = useRef();
  
  // Purple gradient colors
  const colors = [
    "#C4B5FD", "#A78BFA", "#8B5CF6", "#7C3AED", "#6D28D9",
    "#5B21B6", "#4C1D95", "#4338CA", "#3730A3", "#312E81",
  ];

  useEffect(() => {
    let prevX = 0;
    let prevY = 0;
    
    // Throttled mouse move handler
    const handleMouseMove = (e) => {
      // Calculate distance moved
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Only update if mouse has moved significantly (reduce unnecessary updates)
      if (distance > 2) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    // Optimized animation function
    const animateCircles = () => {
      let x = mousePosition.x;
      let y = mousePosition.y;

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;
        
        // Use transform instead of left/top for better performance
        circle.style.transform = `translate(${x - 6}px, ${y - 6}px) scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle?.x - x) * 0.4; // Increased speed slightly
        y += (nextCircle?.y - y) * 0.4;
      });

      animationFrameRef.current = requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animateCircles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {colors.map((color, index) => (
        <div
          key={index}
          ref={el => circlesRef.current[index] = el}
          className="absolute rounded-full"
          style={{
            width: '12px', // Reduced size
            height: '12px',
            backgroundColor: color,
            opacity: 0.8,
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        />
      ))}
    </div>
  );
});

MouseTrailer.displayName = 'MouseTrailer';

export default MouseTrailer;