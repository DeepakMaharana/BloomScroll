import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const thirdDivRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    // Create timeline for first section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstDivRef.current,
        scroller:".content",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
        onComplete: () => {
          // Show second div when first animation completes
          gsap.to(secondDivRef.current, {
            autoAlpha: 1,
            duration: 0.5
          });
        }
      }
    });

    // Add animations to timeline
    tl.from(boxRef.current, {
      scale: 0,
      rotation: 360,
      duration: 1
    })
    .to(boxRef.current, {
      x: 200,
      duration: 1
    })
    .to(boxRef.current, {
      y: 200,
      duration: 1
    })
    .to(boxRef.current, {
      scale: 2,
      duration: 1
    });

    // Initially hide second div
    // gsap.set(secondDivRef.current, { autoAlpha: 0 });

    return () => {
      // Cleanup ScrollTrigger on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div 
        ref={firstDivRef} 
        className="h-screen bg-blue-400 relative flex items-center justify-center"
      >
        <div 
          ref={boxRef}
          className="w-20 h-20 bg-blue-500 rounded"
        />
      </div>
      
      <div 
        ref={secondDivRef}
        className="h-screen bg-green-400 flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-green-600">Second Section</h2>
      </div>
      
      <div 
        ref={thirdDivRef}
        className="h-screen bg-purple-400 flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-purple-600">Third Section</h2>
      </div>
    </div>
  );
};

export default ScrollAnimation;