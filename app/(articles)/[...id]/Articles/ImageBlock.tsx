import Image from "next/image";
import { ImageBlockProps } from "./ComponentProps";

const ImageBlock = ({ src, alt, caption }: ImageBlockProps) => (
  <div className="p-4">
    <Image
      className="mx-auto rounded-md shadow-md"
      src={src}
      alt={alt}
      sizes="100vw"
    />
    {caption && <p className="mt-2 text-center text-gray-600">{caption}</p>}
  </div>
);

export default ImageBlock;
