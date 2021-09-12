import React, { FC } from 'react';
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

const ScrollingAvatars: FC<IProps> = () => (
  <div className="scrolling-avatars">
    <Avatar className="avatar" />
    <Avatar className="avatar" />
    <Avatar className="avatar" />
  </div>
);

export default ScrollingAvatars;
