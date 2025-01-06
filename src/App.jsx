import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import BrandScreen from "./pages/BrandScreen";
import Navbar from "./components/Navbar";
import ImageCanvas from "./components/ImageCanvas";
import Footer from "./components/Footer";
import BottomNavigationModal from "./components/BottomNavigationModal";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import TransformationalFeatures from "./components/Features";

function App() {
  useEffect(() => {
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
            {/* <TransformationalFeatures/> */}

            <section className="page h-full">
              <TransformationalFeatures/>
            </section>
            
            {/* <section className="page h-[5000px]">
            </section> */}

            <Footer />
          </div>
        </div>
      </PrimeReactProvider>
    </>
  );
}

export default App;
