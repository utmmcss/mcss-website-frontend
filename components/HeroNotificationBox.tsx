import Arrow from "../public/arrow_forward.svg";
import Image from "next/image";
export default function HeroNotificationBox() {
  return (
    <div className="heroNotificationBox">
      <p className="text-2xl font-bold">We’re hosting an event!</p>
      <div className="flex justify-evenly items-center">
        <p className="text-base overflow-clip flex-shrink font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
          mauris rhoncus ipsum vulputate ultrices. Vivamus accumsan neque sit
          amet tincidunt vehicula. Sed porttitor velit a augue imperdiet semper.
          Integer dignissim non enim ut efficitur. Fusce sed nunc mi. Sed nibh
          lacus, fringilla non erat sit amet, tempor vehicula tellus.
        </p>
        <button className="flex-none max-h-12">
          <Image src={Arrow} alt="Events"></Image>
        </button>
      </div>
    </div>
  );
}
