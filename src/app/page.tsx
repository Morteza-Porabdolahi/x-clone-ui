import { Feed } from "@/components/Feed";
import { Share } from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-around text-textGray font-bold border-b-[1px] border-borderGray">
        <Link href="/about" className="pb-3 border-b-2 border-iconBlue px-4 pt-4 text-white">For You</Link>
        <Link href="/about" className="pb-3 px-4 pt-4">Following</Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
