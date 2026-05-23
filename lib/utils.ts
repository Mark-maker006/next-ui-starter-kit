import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return path;
}

export function convertToRgba({
  color,
  opacity,
}: {
  color: string;
  opacity: number;
}): string {
  const normalizedColor = color.trim();
  const clampedOpacity = Math.min(1, Math.max(0, opacity));

  if (normalizedColor.startsWith('rgba(')) {
    return normalizedColor.replace(
      /rgba\(([^,]+),([^,]+),([^,]+),([^)]+)\)/,
      `rgba($1,$2,$3,${clampedOpacity})`,
    );
  }

  if (normalizedColor.startsWith('rgb(')) {
    return normalizedColor
      .replace('rgb(', 'rgba(')
      .replace(')', `, ${clampedOpacity})`);
  }

  const hex = normalizedColor.replace('#', '');
  const expandedHex =
    hex.length === 3
      ? hex
          .split('')
          .map((value) => `${value}${value}`)
          .join('')
      : hex;

  if (!/^[0-9a-fA-F]{6}$/.test(expandedHex)) {
    return normalizedColor;
  }

  const red = parseInt(expandedHex.slice(0, 2), 16);
  const green = parseInt(expandedHex.slice(2, 4), 16);
  const blue = parseInt(expandedHex.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${clampedOpacity})`;
}
