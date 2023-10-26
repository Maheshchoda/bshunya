import Image from "next/image";
import { Upload } from "./ElementProps";
import renderText from "./RenderText";

const ImageComponent = ({ element }: { element: Upload }) => (
  <figure>
    <Image
      src="/images/Screenshot 2023-10-20 at 2.19.00 PM.png"
      alt={element.value.alt}
      width={300}
      height={300}
    />
    <figcaption>{element.value.caption.map(renderText)}</figcaption>
  </figure>
);

export default ImageComponent;
