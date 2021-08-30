import { FC } from 'react';
import Image from 'next/image';
import Arrow from '../public/arrow_forward.svg';

type HeroNotificationBoxProps = {
  title?: string;
  content?: string;
};

const HeroNotificationBox: FC<HeroNotificationBoxProps> = ({
  title,
  content,
}: HeroNotificationBoxProps) => (
  <div className="heroNotificationBox">
    <p className="text-2xl font-bold">{title}</p>
    <div className="flex justify-between items-center">
      <p className="text-base overflow-clip flex-shrink font-medium">
        {content}
      </p>
      <button type="button" className="flex-none max-h-12">
        <Image src={Arrow} alt="Events" />
      </button>
    </div>
  </div>
);

HeroNotificationBox.defaultProps = {
  title: 'We’re hosting an event!',
  content: 'This is going to be a fun event!',
};

export default HeroNotificationBox;
