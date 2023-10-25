import Image, { StaticImageData } from "next/image";

type ImageProps = {
  src: StaticImageData;
  alt: string;
};

const ImageComponent = ({ src, alt }: ImageProps) => {
  return <Image src={src} alt={alt} />;
};

export default ImageComponent;
