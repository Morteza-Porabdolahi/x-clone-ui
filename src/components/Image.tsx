import { Image as ImageKit } from "@imagekit/next";

type ImageType =
  | {
      src: string;
      className?: string;
      alt: string;
      fill: true;
    }
  | {
      src: string;
      className?: string;
      width: number;
      height: number;
      alt: string;
      fill?: false;
    };

const urlEndPoint = process.env.NEXT_PUBLIC_IMAGE_URL_ENDPOINT;

const Image = ({ src, className, alt, fill, ...props }: ImageType) => {
  return (
    <ImageKit
      urlEndpoint={urlEndPoint}
      src={src}
      className={className}
      alt={alt}
      fill={fill ?? false}
      {...props}
    />
  );
};

export { Image };
