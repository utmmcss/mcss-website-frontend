import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  /** width and height of avatar */
  size?: number;
  className?: string;
  imgSrc: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Avatar: FC<IProps> = ({ size = 100, className, imgSrc, onMouseEnter, onMouseLeave }) => (
  <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className}>
    <Image alt="avatar" src={imgSrc} layout="fixed" width={size} height={size} />
  </div>
);

export default Avatar;
