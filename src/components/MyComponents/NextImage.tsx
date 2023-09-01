import NImage, { ImageProps } from 'next/image';

interface NextImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  height?: number;
}

export default function NextImage({ src, height, style, ...props }: NextImageProps) {
  return (
    <NImage
      {...props}
      priority
      src={src}
      sizes="100vw"
      width={0}
      height={0}
      style={{
        width: props.width || '100%',
        height: height || '100%',
        objectFit: 'cover',
        ...style,
      }}
    />
  );
}
