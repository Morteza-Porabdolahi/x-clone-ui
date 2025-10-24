import { Image } from "./Image";
import { PostInfo } from "./PostInfo";

function Post() {
  return (
    <section className="p-4 border-y-[1px] border-borderGray">
      {/* Post type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        icon
        <span>Lama Dev reposted</span>
      </div>
      <div className="flex gap-4">
        {/* Post image */}
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <Image src="/general/avatar.png" alt="User's avatar" fill />
        </div>
        {/* Post Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Top Content */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Morteza</h1>
              <span className="text-textGray">@Morimorteza</span>
              <time className="text-textGray" dateTime="">
                1 day ago
              </time>
            </div>
            <PostInfo />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            ducimus officiis amet at esse cum. Similique dolore corrupti cum
            culpa.
          </p>
          <Image src="general/post.jpeg" alt="Post Media" width={600} height={600} />
        </div>
      </div>
    </section>
  );
}

export { Post };
