'use client';

import { useRef, useState, useCallback } from 'react';

interface TiltOptions {
  maxRotation?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
}

interface TiltTransform {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export function useTiltEffect(options: TiltOptions = {}) {
  const {
    maxRotation = 15,
    perspective = 1000,
    scale = 1.02,
    speed = 300,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<TiltTransform>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxRotation;
      const rotateY = ((x - centerX) / centerX) * maxRotation;

      setTransform({
        rotateX,
        rotateY,
        scale: isHovered ? scale : 1,
      });
    },
    [maxRotation, scale, isHovered]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setTransform((prev) => ({ ...prev, scale }));
  }, [scale]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  const tiltStyle: React.CSSProperties = {
    transform: `perspective(${perspective}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
    transition: isHovered
      ? 'transform 100ms ease-out'
      : `transform ${speed}ms ease-out`,
    willChange: 'transform',
  };

  return {
    ref,
    tiltStyle,
    eventHandlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}