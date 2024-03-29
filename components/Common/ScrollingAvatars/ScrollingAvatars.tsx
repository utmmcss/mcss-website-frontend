import React, { FC, useEffect, useState } from 'react';

import Avatar from '@components/Common/ScrollingAvatars/Avatar';
import { Member } from '@store/memberSlice';

interface IProps {
  /** pre-set width and height of each avatar */
  size?: 'sm' | 'md' | 'lg';
  /** list of objects containing the configs for the avatars, maximum size is 24 */
  avatarInfos: Member[];
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
 * create infinite scrolling animation and return the new list of avatar infos.
 */
const appendAvatarInfos = (
  avatarInfos: Member[],
  { size, margin }: { size: number; margin: number }
) => {
  const currAvatarWidth = avatarInfos.length * (size + 2 * margin);
  const desiredWidth = window.innerWidth + 20 * currAvatarWidth;
  const remainingWidth = desiredWidth - currAvatarWidth;
  const remainingAvatars = Math.ceil(remainingWidth / currAvatarWidth);
  const appendedAvatarsInfos = [...avatarInfos];
  [...new Array(remainingAvatars)].forEach((_, i) =>
    appendedAvatarsInfos.push(avatarInfos[i % avatarInfos.length])
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
  const [appendedAvatarsInfos, setAppendedAvatarsInfos] = useState<Member[]>([]);
  const avatarConfig = AVATAR_SIZE_MAP[size];

  // we have to use useEffect since we need the component to mount first before we can call window
  useEffect(() => {
    setAppendedAvatarsInfos(appendAvatarInfos(avatarInfos, avatarConfig));
  }, [avatarConfig, avatarInfos]);

  return (
    <div className="scrolling-avatars">
      <div
        className={`scrolling-avatars-inner-container--${size}--${avatarInfos.length}--scroll-${scrollDirection}`}
      >
        {appendedAvatarsInfos.map(({ name, role, avatarUrl, links }) => (
          <Avatar
            onMouseEnter={() => {
              setName(name);
              setPosition(role);
            }}
            onMouseLeave={() => {
              setName('');
              setPosition('');
            }}
            onClick={() => {
              if (links.Website) {
                window.location.href = links.Website;
              } else if (links.Linkedin) {
                window.location.href = links.Linkedin;
              } else if (links.Github) {
                window.location.href = links.Github;
              } else if (links.Instagram) {
                window.location.href = links.Instagram;
              }
            }}
            className="avatar"
            size={avatarConfig.size}
            imgSrc={avatarUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingAvatars;
