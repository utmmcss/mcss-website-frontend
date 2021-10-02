import React, { FC, useEffect, useState } from 'react';
import Avatar from '@components/ScrollingAvatars/Avatar';
import type { AvatarInfo } from './ScrollingAvatarsContainer';

interface IProps {
  /** pre-set width and height of each avatar */
  size?: 'sm' | 'md' | 'lg';
  /** list of objects containing the configs for the avatars, maximum size is 24 */
  avatarInfos: AvatarInfo[];
  scrollDirection?: 'left' | 'right';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  setName: (name: string) => void;
  setPosition: (position: string) => void;
}

/** enum used to map size label and it's corresponding css properties.
 * This enum must match that in ScrollingAvatar.scss */
const AVATAR_SIZE_MAP = {
  sm: {
    size: 60,
    margin: 15,
  },
  md: {
    size: 100,
    margin: 30,
  },
  lg: {
    size: 150,
    margin: 50,
  },
};

/**
 * Given a list of avatar infos, calculate the total number of avatars needed to be appended to
 * create infinte scrolling animation and return the new list of avatar infos.
 */
const appendAvatarInfos = (
  avatarInfos: AvatarInfo[],
  { size, margin }: { size: number; margin: number },
) => {
  const currAvatarWidth = avatarInfos.length * (size + 2 * margin);
  const desiredWidth = window.innerWidth + 20 * currAvatarWidth;
  const remainingWidth = desiredWidth - currAvatarWidth;
  const remainingAvatars = Math.ceil(remainingWidth / currAvatarWidth);
  const appendedAvatarsInfos = [...avatarInfos];
  [...new Array(remainingAvatars)].forEach((_, i) =>
    appendedAvatarsInfos.push(avatarInfos[i % avatarInfos.length]),
  );

  return appendedAvatarsInfos;
};

const ScrollingAvatars: FC<IProps> = ({
  size = 'sm',
  avatarInfos,
  scrollDirection = 'left',
  setName,
  setPosition,
}) => {
  const [appendedAvatarsInfos, setAppendedAvatarsInfos] = useState<AvatarInfo[]>([]);
  const avatarConfig = AVATAR_SIZE_MAP[size];

  // we have to use useEffect since we need the component to mount first before we can call window
  useEffect(() => {
    setAppendedAvatarsInfos(appendAvatarInfos(avatarInfos, avatarConfig));
  }, [avatarConfig, avatarInfos]);

  return (
    <div className="scrolling-avatars">
      <div
        className={`scrolling-avatars-container--${size}--${avatarInfos.length}--scroll-${scrollDirection}`}
      >
        {appendedAvatarsInfos.map(({ name, position, imgSrc }) => (
          <Avatar
            onMouseEnter={() => {
              setName(name);
              setPosition(position);
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