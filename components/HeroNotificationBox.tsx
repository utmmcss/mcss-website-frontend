import Arrow from "../public/arrow_forward.svg";
import Image from "next/image";
import { FC } from "react";

type HeroNotificationBoxProps = {
  title?: string;
  content?: string;
};

const HeroNotificationBox: FC<HeroNotificationBoxProps> = ({
  title,
  content,
}) => {
  return (
    <div className="heroNotificationBox">
      <p className="text-2xl font-bold">{title || "We’re hosting an event!"}</p>
      <div className="flex justify-evenly items-center">
        <p className="text-base overflow-clip flex-shrink font-medium">
          {content || "This is going to be a fun event!"}
        </p>
        <button className="flex-none max-h-12">
          <Image src={Arrow} alt="Events"></Image>
        </button>
      </div>
    </div>
  );
};
export default HeroNotificationBox;
