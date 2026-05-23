'use client';

import { ReactNode } from 'react';
import { useTiltEffect } from './hooks/useTiltEffect';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxRotation?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
}

export function TiltCard({
  children,
  className = '',
  maxRotation = 10,
  perspective = 1000,
  scale = 1.03,
  speed = 400,
}: TiltCardProps) {
  const { ref, tiltStyle, eventHandlers } = useTiltEffect({
    maxRotation,
    perspective,
    scale,
    speed,
  });

  return (
    <div
      ref={ref}
      className={`transition-shadow duration-300 ${className}`}
      style={tiltStyle}
      {...eventHandlers}
    >
      {children}
    </div>
  );
}