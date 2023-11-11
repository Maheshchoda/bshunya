import Image from "next/image";
import { UploadProps } from "@/types";
import renderText from "./RenderText";

const ImageComponent = ({ element }: { element: UploadProps }) => {
  const {
    cloud: { url },
    alt,
    caption,
  } = element.value;

  return (
    <figure className="my-8 flex flex-col items-center">
      <div className="w-full h-auto relative">
        <Image
          src={url}
          alt={alt || ""}
          className="rounded-lg w-full object-cover"
          objectFit="cover"
          width={400}
          height={300}
        />
      </div>
      {/* {caption && (
        <figcaption className="text-sm text-gray-500 mt-2">
          {caption.map(renderText)}
        </figcaption>
      )} */}
    </figure>
  );
};

export default ImageComponent;
