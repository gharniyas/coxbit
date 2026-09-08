import Image from "next/image";
import { resolveImageSrc } from "../lib/cloudinary";

export default function CloudinaryImage({ src, ...props }) {
  return <Image src={resolveImageSrc(src)} {...props} />;
}
