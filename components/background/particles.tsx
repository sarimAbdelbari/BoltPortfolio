'use client';

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig } from "./particles-config";

interface ParticlesComponentProps {
  id: string;
  className?: string;
}

export function ParticlesComponent({ id, className }: ParticlesComponentProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initEngine();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id={id}
      options={{
        ...particlesConfig,
        particles: {
          ...particlesConfig.particles,
          color: {
            value: document.documentElement.classList.contains('dark') 
              ? "#724ce9" 
              : "#3b82f6"
          }
        }
      }}
      className={className}
    />
  );
}