import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineUpload,
} from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 border-r-0 border-b-0 border-l-0 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/70858037?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11 gap-3">
          <h5>Harshit Sharma</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            cumque aperiam exercitationem ratione, enim placeat ipsam numquam
            excepturi neque iste delectus, aut harum! Animi quas quibusdam
            excepturi dolore.
          </p>
          <div className="flex justify-between mt-5 text-lg items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <AiOutlineUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
