import React from "react";
import Image from "next/image";
import { RiTwitterXFill } from "react-icons/ri";
import { BiHomeCircle, BiMessageAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCardList } from "react-icons/bs";
import { LiaBookmarkSolid } from "react-icons/lia";
import { TbUsers } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  { title: "Explore", icon: <FiSearch /> },
  { title: "Notifications", icon: <IoMdNotificationsOutline /> },
  { title: "Messages", icon: <BiMessageAlt /> },
  { title: "Lists", icon: <BsCardList /> },
  { title: "Bookmarks", icon: <LiaBookmarkSolid /> },
  { title: "Communities", icon: <TbUsers /> },
  { title: "Premium", icon: <RiTwitterXFill /> },
  { title: "Profile", icon: <AiOutlineUser /> },
  { title: "More", icon: <BsCardList /> },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3  pt-2 px-4 ml-28">
          <div className="text-4xl h-fit hover:bg-gray-600 rounded-full p-2 w-fit cursor-pointer transition-all">
            <RiTwitterXFill />
          </div>
          <div className="mt-1 text-xl font-bold">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4  hover:bg-gray-600 rounded-full px-3 py-2 w-fit cursor-pointer transition-all mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="text-white bg-blue-500 item-center text-lg p-4 rounded-full w-full cursor-pointer">
              Post
            </button>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll  border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 "></div>
      </div>
    </div>
  );
}
