import NextImage, { ImageProps } from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const Image = ({ src, ...rest }: ImageProps) => {
  let resolvedSrc = src;
  if (typeof src === 'string' && src.startsWith('/')) {
    resolvedSrc = `${basePath}${src}`;
  }
  return <NextImage src={resolvedSrc} {...rest} />;
};

export default Image;
