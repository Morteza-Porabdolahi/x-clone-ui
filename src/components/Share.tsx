"use client"

import { ChangeEvent, useState } from "react";
import { Image } from "./Image";
import { shareAction } from "@/actions";

function Share() {
  const [media, setMedia] = useState<File | null>(null);

  const handleMediaChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <form action={shareAction} className="p-4 flex gap-4">
      <div className="relative w-10 h-10 overflow-hidden rounded-full">
        <Image src="/general/avatar.png" alt="User's avatar" fill />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <input
          name="desc"
          type="text"
          className="w-full bg-transparent outline-none placeholder:text-textGray text-xl"
          placeholder="What is happening?"
        />
        <div className="flex gap-4 justify-between items-center flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input hidden type="file" name="file" id="file-input" onChange={handleMediaChange} />
            <label htmlFor="file-input" className="cursor-pointer">
              <Image src="icons/image.svg" alt="" width={20} height={20} />
            </label>
            <Image src="icons/gif.svg" alt="" width={20} height={20} />
            <Image src="icons/poll.svg" alt="" width={20} height={20} />
            <Image src="icons/emoji.svg" alt="" width={20} height={20} />
            <Image src="icons/schedule.svg" alt="" width={20} height={20} />
            <Image src="icons/location.svg" alt="" width={20} height={20} />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold rounded-full px-4 py-2"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export { Share };
