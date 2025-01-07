import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ImageCanvas = () => {
  const canvasRef = useRef(null);
  const index = { value: 1 };

  const images = useMemo(() => {
    const loadedImages = [];

    for (let i = 1; i <= 1208; i++) {
      const img = new Image();
      img.src = `./frames/frame_${i.toString().padStart(4, "0")}.png`;
      loadedImages.push(img);
    }

    return loadedImages;
  }, []);

  const render = useCallback(
    (index) => {
      console.log("Rendering frame:", index);
      if (images[index]) {
        // canvasRef.current?.getContext("2d")?.drawImage(images[index], 0, 0);

        // canvasRef.current.setAttribute("data-url", images[index].src);
        const img = images[index];
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      }
    },
    [images]
  );

  useGSAP(() => {
    // const tl = gsap.timeline({
    //   delay:10
    // });

    const headingLetters = document.querySelectorAll(".heading_letter");
    const subheadingLetters = document.querySelectorAll(".subheading_letter");
    const paraLetters = document.querySelectorAll(".para_letter");
    const sections = document.querySelectorAll(".page");


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        scroller: ".content",
        pin: true, // Pin the section while animating
        anticipatePin: 1, // Improves pin performance
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onComplete: (self) => {
          console.log("Timeline completed");
          self.kill(); // Removes the ScrollTrigger instance and its markers
        },
      },
    })

    .to(index, {
      value: 200,
      duration: 40,
      ease:"power1.inOut",
      onUpdate: () => {
        render(Math.round(index.value));
      },
    }, 'zero')

    .to(index, {
      value: 400,
      duration: 60,
      ease:"power1.inOut",
      onUpdate: () => {
        render(Math.round(index.value));
      },
    }, 'first')
    .to(".parent .canvas_div",{
      xPercent:50,
      duration:40,
      ease:"power2.inOut"
    }, 'first')

    .to(index, {
      value: 600,
      duration: 40,
      ease: "linear",
      onUpdate: () => {
        render(Math.round(index.value));
      },
    },"second")
    .fromTo(
      headingLetters,
      {
        opacity:0,
      },
      {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power1.inOut",
      },
      "second"
    )
    .fromTo(
      subheadingLetters,
      {
        opacity:0,
      },
      {
        delay: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power1.inOut",
      },
      "second"
    )
    .fromTo(
      paraLetters,
      {
        opacity:0,
      },
      {
        delay: 2,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power1.inOut",
      },
      "second"
    )
    .to(".heading_container",{
      opacity: 0,
      duration: 3,
      stagger: 0.2,
      ease: "power1.inOut",
    })

    .to(index, {
      value: 1000,
      duration: 60,
      ease: "linear",
      onUpdate: () => {
        render(Math.round(index.value));
      },
    },"third")
    .to(".parent", {
      scale: 0.8,
      duration: 40,
      ease: "linear",
      onUpdate: () => {
        render(Math.round(index.value));
      },
    },"third")
    .to(".parent .canvas_div", {
      xPercent:0,
      duration:40,
      ease:"power2.inOut"
    }, "third")

    .to(index, {
      value: 1200,
      duration: 40,
      ease: "linear",
      onUpdate: () => {
        render(Math.round(index.value));
      },
    },"fourth")

  });

  useEffect(() => {

    render(1);
  }, []);

  return (
    <div className="parent w-full h-full flex justify-center items-center bg-black overflow-hidden">
      <div className="canvas_div w-full h-full lg:w-[60vw] lg:h-[60vh] bg-[#040810]">
        <canvas
          className="scrollCanvas w-full h-full mix-blend-difference"
          ref={canvasRef}
        ></canvas>
      </div>

      <div className="container mx-auto h-full px-4 absolute top-0 flex flex-col justify-center drop-shadow-xl filter backdrop-blur-sm lg:backdrop-blur-none heading_container" style={{backdropFilter:"blur(2px)"}}>
        <h1 className="text-center text-6xl lg:text-8xl lg:text-left font-bold my-4 text-purple-500">
          {
            "Bloom Scroll".split("").map((letter, index) => (
            <span key={index} className="heading_letter">
              {letter}
            </span>
          ))}
        </h1>
        <h2 className="text-center text-4xl lg:text-6xl lg:text-left font-semibold my-3 ">
          {
            "Reimagine Your Digital World".split("").map((letter, index) => (
            <span key={index} className="subheading_letter">
              {letter}
            </span>
          ))}
        </h2>
        <p className="text-center text-xl lg:text-2xl lg:text-left  my-1 ">
          {
            "From Endless Scrolling to Meaningful Growing—Discover the Power of Technology That Nourishes Your Soul.".split("").map((letter, index) => (
            <span key={index} className="para_letter">
              {letter}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ImageCanvas;
