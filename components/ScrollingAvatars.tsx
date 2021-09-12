import React, { FC, useEffect, useState } from 'react';
import Avatar from '@components/Avatar';

interface AvatarInfo {
  name: string;
  position: string;
  imgSrc: string;
}

interface IProps {
  /** pre-set width and height of each avatar */
  size?: 'small' | 'mid' | 'large';
  /** list of objects containing the configs for the avatars */
  avatarInfos: AvatarInfo[];
  scrollDirection?: 'left' | 'right';
}

/** enum used to map size label and it's corresponding css properties.
 * This enum must match that in ScrollingAvatar.scss */
const AVATAR_ENUM = {
  small: {
    size: 60,
    margin: 15,
  },
  mid: {
    size: 100,
    margin: 30,
  },
  large: {
    size: 150,
    margin: 50,
  },
};

const appendAvatarInfos = (
  avatarInfos: AvatarInfo[],
  { size, margin }: { size: number; margin: number },
) => {
  const currAvatarWidth = avatarInfos.length * (size + 2 * margin);
  const desiredWidth = window.innerWidth + 10 * currAvatarWidth;
  const remainingWidth = desiredWidth - currAvatarWidth;
  const remainingAvatars = Math.ceil(remainingWidth / currAvatarWidth);
  const appendedAvatarsInfos = [...avatarInfos];

  for (let i = 0; i < remainingAvatars; i += 1) {
    appendedAvatarsInfos.push(avatarInfos[i % avatarInfos.length]);
  }

  return appendedAvatarsInfos;
};

const ScrollingAvatars: FC<IProps> = ({
  size = 'small',
  avatarInfos,
  scrollDirection = 'left',
}) => {
  const [appendedAvatarsInfos, setAppendedAvatarsInfos] = useState<AvatarInfo[]>([]);
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const avatarConfig = AVATAR_ENUM[size];
  const titleString = name && position ? `${name} - ${position}` : '';

  useEffect(() => {
    setAppendedAvatarsInfos(appendAvatarInfos(avatarInfos, avatarConfig));
  }, [avatarConfig, avatarInfos]);

  return (
    <div className="scrolling-avatars">
      <p className="text-center title-string">{titleString}</p>
      <div className={`scrolling-avatars-container--${size}--scroll-${scrollDirection}`}>
        {appendedAvatarsInfos.map(({ name: currName, position: currPosition, imgSrc }) => (
          <Avatar
            onMouseEnter={() => {
              setName(currName);
              setPosition(currPosition);
            }}
            onMouseLeave={() => {
              setName('');
              setPosition('');
            }}
            className="avatar"
            size={avatarConfig.size}
            imgSrc={imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingAvatars;
