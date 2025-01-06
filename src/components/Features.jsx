import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-100px" }}
    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <motion.h3 
      className="text-xl font-semibold text-pink-500 mb-4"
      whileHover={{ scale: 1.02 }}
    >
      {title}
    </motion.h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const features = [
  {
    title: "Mood Check-In",
    description: "Start your journey by selecting your emotional state. Bloom adapts to support your well-being."
  },
  {
    title: "Vibrational Curation",
    description: "Content is dynamically tailored to elevate your mood and resonance—helping you feel more connected, inspired, and aligned."
  },
  {
    title: "Growth Journeys",
    description: "Curated content based on your interests, guiding you toward personal growth and transformation."
  },
  {
    title: "Bloomscore",
    description: "Track your positive impact on the platform and in real life, creating a healthy incentive for meaningful contributions."
  },
  {
    title: "Ripple Effects",
    description: "See how your actions create positive chain reactions across the Bloom community."
  },
  {
    title: "Mindful Pause",
    description: "Take intentional breaks and disconnect to reconnect with the real world. A gentle nudge to avoid doomscrolling."
  }
];

const TransformationalFeatures = () => (
  <div className=" p-4 md:p-8">
    <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
    >
      TRANSFORMATIONAL FEATURES
    </motion.h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          index={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </div>
);

export default TransformationalFeatures;