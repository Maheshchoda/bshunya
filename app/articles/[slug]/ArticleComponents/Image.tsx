import Image from "next/image";
import { Upload } from "./ContentProps";
import renderText from "./RenderText";

const ImageComponent = ({ element }: { element: Upload }) => {
  return (
    <figure>
      <Image
        src={element.value.cloud.url}
        alt={element.value.alt || ""}
        width={400}
        height={300}
      />
      {/* <figcaption>{element.value.caption?.map(renderText)}</figcaption> */}
    </figure>
  );
};

export default ImageComponent;
