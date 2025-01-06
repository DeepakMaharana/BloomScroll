import React from "react";

function Footer() {
  return (
    <footer
      className=" text-white py-6"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #312E81 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="w-full flex flex-wrap justify-evenly gap-2">
          <div className="flex  flex-col w-[45%] sm:w-max justify-evenly items-start">
            <a href="#" className="hover:text-gray-200 font-bold w-full border-b-2 py-2 my-2 border-purple-300">
              About
            </a>

            <a href="#" className="hover:text-gray-200 text-sm">
              Our Story
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
            Team
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
            Careers
            </a>
          </div>

          <div className="flex flex-col w-[45%] sm:w-max justify-evenly">
            <a href="#" className="hover:text-gray-200 font-bold w-full border-b-2 py-2 my-2 border-purple-300">
              Features
            </a>

            <a href="#" className="hover:text-gray-200 text-sm">
              Mood Check-In
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
              Growth Journeys
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
              Bloomscore
            </a>
          </div>

          <div className="flex flex-col w-[45%] sm:w-max justify-evenly">
            <a href="#" className="hover:text-gray-200 font-bold w-full border-b-2 py-2 my-2 border-purple-300">
              Resources
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
              Blog
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
              Help Center
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
              Community
            </a>
          </div>

          <div className="flex flex-col w-[45%] sm:w-max justify-evenly">
            <a href="#" className="hover:text-gray-200 font-bold w-full border-b-2 py-2 my-2  border-purple-300">
              Connect
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
              Contact Us
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-200 text-sm">
              LinkedIn
            </a>
          </div>
        </div>
        <p className="text-center text-sm">
          © 2023 Bloom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
