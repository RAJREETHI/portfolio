import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: -1 },

        background: {
          color: "#000000"
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 40
          },

          color: {
            value: "#ff0000"
          },

          opacity: {
            value: 0.5
          },

          size: {
            value: { min: 2, max: 4 }
          },

          move: {
            enable: true,
            speed: 1
          },

          links: {
            enable: false
          }
        },
      }}
    />
  );
}