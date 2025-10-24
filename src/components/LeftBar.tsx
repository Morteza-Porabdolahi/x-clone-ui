import { Image } from "@/components/Image";
import Link from "next/link";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-between sticky top-0 pt-2 pb-8 gap-8">
      <section className="flex flex-col items-center gap-4 text-lg xxl:items-start transition">
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image src="/icons/logo.svg" alt="Logo" width={24} height={24} />
        </Link>
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="transition p-2.5 flex items-center gap-4 rounded-full hover:bg-[#181818]"
            >
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="xxl:hidden bg-white text-black rounded-full font-bold flex w-12 h-12 justify-center items-center"
        >
          <Image src="icons/post.svg" alt="New post" width={24} height={24} />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </section>
      <section className="flex items-center justify-between">
        <section className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden relative">
            <Image src="/general/avatar.png" alt="User avatar" fill />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Morteza</span>
            <span className="text-sm text-textGray">@morimorteza</span>
          </div>
        </section>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </section>
    </section>
  );
};

export { LeftBar };
