import { useEffect } from "react";
import SplashScreen from "./pages/SplashScreen";
import Navbar from "./components/Navbar";
import ImageCanvas from "./components/ImageCanvas";
import Footer from "./components/Footer";
import BottomNavigationModal from "./components/BottomNavigationModal";
import { PrimeReactProvider } from "primereact/api";
import TransformationalFeatures from "./components/Features";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <PrimeReactProvider>
      <div className="min-h-screen relative">
        <SplashScreen />
        <div className="wrapper relative overflow-x-hidden">
          <Navbar />
          <BottomNavigationModal />

          {/* Responsive spheres */}
          <div className="sphere hidden md:block"></div>
          <div className="sphere hidden md:block"></div>
          <div className="sphere hidden md:block"></div>

          <div className="content relative">
            <section className="page canvas_page min-h-screen w-full bg-black">
              <ImageCanvas />
            </section>

            <section className="page min-h-screen w-full">
              <TransformationalFeatures />
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
}

export default App;