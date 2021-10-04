import React, { FC, useState } from 'react';
import _ from 'underscore';

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
  let mappedScrollingAvatars;

  if (rows >= avatarInfos.length) {
    mappedScrollingAvatars = [...new Array(rows)].map((__, index) => (
      <ScrollingAvatars
        scrollDirection={index % 2 === 0 && !startScrollRight ? 'left' : 'right'}
        avatarInfos={avatarInfos}
        setName={setName}
        setPosition={setPosition}
      />
    ));
  } else {
    /** If the number of rows is less than the number of avatars, we will attempt to
     * evenly distribute the avatars across the rows. In the case where there are left overs,
     * we will add them to the last row.
     * */
    mappedScrollingAvatars = _.chunk(avatarInfos, avatarInfos.length / rows).map(
      (chunkedAvatarInfos, index) => (
        <ScrollingAvatars
          scrollDirection={
            (index % 2 === 0 && !startScrollRight) || (index % 2 !== 0 && startScrollRight)
              ? 'left'
              : 'right'
          }
          avatarInfos={chunkedAvatarInfos}
          setName={setName}
          setPosition={setPosition}
        />
      ),
    );
  }

  return (
    <div className="scrolling-avatars-container">
      <p className="text-center" style={{ minHeight: 25, margin: 0 }}>
        {titleString}
      </p>
      <div className="scrolling-area">{mappedScrollingAvatars}</div>
    </div>
  );
};

export default ScrollingAvatarsContainer;
export type { AvatarInfo };
