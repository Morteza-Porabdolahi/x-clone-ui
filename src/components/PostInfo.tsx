import { Image } from "./Image";

function PostInfo() {
  return (
    <div className="w-4 h-4 relative cursor-pointer">
      <Image
        src="icons/infoMore.svg"
        alt="More Info Button"
        fill
        className="cursor-pointer"
      />
    </div>
  );
}

export { PostInfo };
