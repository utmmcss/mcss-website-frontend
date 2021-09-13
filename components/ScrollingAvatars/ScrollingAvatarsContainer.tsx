import React, { FC, useState } from 'react';
import ScrollingAvatars from './ScrollingAvatars';

interface AvatarInfo {
  name: string;
  position: string;
  imgSrc: string;
}

interface IProps {
  rows?: number;
  startScrollRight?: boolean;
  avatarInfos: AvatarInfo[];
}

const ScrollingAvatarsContainer: FC<IProps> = ({ rows = 1, avatarInfos, startScrollRight }) => {
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const titleString = name && position ? `${name} - ${position}` : '';
  // eslint-disable-next-line operator-linebreak
  const mappedScrollingAvatars =
    rows >= avatarInfos.length ? (
      [...Array(rows)].map((_, index) => (
        <ScrollingAvatars
          scrollDirection={index % 2 === 0 && !startScrollRight ? 'left' : 'right'}
          avatarInfos={avatarInfos}
          setName={setName}
          setPosition={setPosition}
        />
      ))
    ) : (
      <ScrollingAvatars
        scrollDirection="left"
        avatarInfos={avatarInfos}
        setName={setName}
        setPosition={setPosition}
      />
    );

  return (
    <div>
      <p className="text-center" style={{ minHeight: 25, margin: 0 }}>
        {titleString}
      </p>
      {mappedScrollingAvatars}
    </div>
  );
};

export default ScrollingAvatarsContainer;
export type { AvatarInfo };
