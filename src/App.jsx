import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import BrandScreen from "./pages/BrandScreen";
import Navbar from "./components/Navbar";
import ImageCanvas from "./components/ImageCanvas";
import Footer from "./components/Footer";
import BottomNavigationModal from "./components/BottomNavigationModal";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import TransformationalFeatures from "./components/Features";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import ScrollAnimation from "./components/ScrollAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
function App() {
  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".second_textDiv",
        scroller: ".content",
        start: "top 40%",
        end: "50% 40%",
        scrub: 1,
      },
    })
    .fromTo(".second_textDiv",{opacity:0},{
      backdropFilter: "blur(5px)",
      opacity:1,
      duration:1
    })
    console.log("App Render");
  }, []);
  return (
    <>
      <PrimeReactProvider>
        <SplashScreen />

        <div className="wrapper">
          <Navbar />
          <BottomNavigationModal />

          <div className="sphere"></div>
          <div className="sphere"></div>
          <div className="sphere"></div>

          <div className="content">            
            <section className="page h-full">
              <ImageCanvas />
            </section>

            <section className="page h-full second_textDiv ">
              <div className="container w-[70%] flex flex-col items-center justify-center backdrop-blur-sm">
                <h1 className="font-bold text-6xl text-center ">A Platform That Grows With You</h1>
                <p className="font-bold text-xl text-center w-[80%] ">At Bloom, we believe technology should empower you to connect deeply, create boldly, and grow authentically. Gone are the days of shallow scrolling and empty interactions. Here, every moment is an opportunity to spark inspiration, nurture your emotions, and forge real-world connections that matter. Bloom is more than a platform—it’s your partner in unlocking a more meaningful, flourishing life</p>
              </div>
            </section>

            <section className="page h-full">
              <TransformationalFeatures/>
            </section>

            <Footer />
          </div>
        </div>
      </PrimeReactProvider>
    </>
  );
}

export default App;
