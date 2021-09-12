import React, { FC, useEffect, useState } from 'react';
import Avatar from '@components/Avatar';

interface AvatarInfo {
  name: string;
  position: string;
  imgSrc: string;
}

interface IProps {
  /** width and height of each avatar */
  size: number;
  /** list of objects containing the configs for the avatars */
  avatarInfos: AvatarInfo[];
}

const appendAvatarInfos = (avatarInfos: AvatarInfo[], size: number) => {
  const desiredWidth = window.innerWidth + 3 * size;
  const currAvatarWidth = avatarInfos.length * (size + 30);
  const remainingWidth = desiredWidth - currAvatarWidth;
  const remainingAvatars = Math.ceil(remainingWidth / (size + 30));
  const appendedAvatarsInfos = [...avatarInfos];

  for (let i = 0; i < remainingAvatars; i += 1) {
    appendedAvatarsInfos.push(avatarInfos[i % avatarInfos.length]);
  }

  return appendedAvatarsInfos;
};

const ScrollingAvatars: FC<IProps> = ({ size, avatarInfos }) => {
  const [appendedAvatarsInfos, setAppendedAvatarsInfos] = useState<AvatarInfo[]>([]);

  useEffect(() => {
    setAppendedAvatarsInfos(appendAvatarInfos(avatarInfos, size));
  }, [avatarInfos, size]);

  return (
    <div className="scrolling-avatars">
      {appendedAvatarsInfos.map(({ imgSrc }) => (
        <Avatar className="avatar" size={size} imgSrc={imgSrc} />
      ))}
    </div>
  );
};

export default ScrollingAvatars;
