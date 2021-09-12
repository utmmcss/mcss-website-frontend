import React, { FC } from 'react';
import ScrollingAvatar from './ScrollingAvatar';

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

const ScrollingAvatarsContainer: FC<IProps> = ({rows = 1, startScrollRight, }) => {
    return (rows)
}

export default ScrollingAvatarsContainer;
export type { AvatarInfo };