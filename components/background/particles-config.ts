import type { ISourceOptions } from "@tsparticles/engine";

export const particlesConfig: ISourceOptions = {
  background: {
    color: { value: "#0c0d27" },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "repulse" },
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      push: { distance: 200, duration: 15 },
      grab: { distance: 150 },
    },
  },
  particles: {
    color: { value: "#724ce9" },
    links: {
      color: "#724ce9",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: { enable: true },
      value: 150,
    },
    opacity: { value: 1.0 },
    shape: { type: "triangle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};