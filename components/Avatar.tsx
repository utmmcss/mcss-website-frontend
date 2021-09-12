import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  /** width and height of avatar */
  size?: number;
  className?: string;
  imgSrc: string;
}

const Avatar: FC<IProps> = ({ size = 100, className, imgSrc }) => (
  <div className={className}>
    <Image alt="avatar" src={imgSrc} layout="fixed" width={size} height={size} />
  </div>
);

export default Avatar;
