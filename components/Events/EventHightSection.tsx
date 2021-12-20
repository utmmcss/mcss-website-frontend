import { FC } from 'react';
import Image from 'next/image';

import MaterialCard from '@components/Common/MaterialCard';
import Button from '@components/Common/Button';
import Tag from '@components/Common/Tag';

const EventHighlightSection: FC = () => (
  <div className="event-highlight-section">
    <MaterialCard className="event-card h-80 w-full lg:w-7/12 relative mb-10">
      <Tag categories={['Computer Science', 'In Person']} />
      <div className="flex h-full">
        <div className="w-1/2 h-full image-container">
          <Image src="/deerfield.png" layout="fill" priority />
        </div>
        <div className="w-1/2 h-full p-3 pt-1">
          <div className="h-1/2">
            <h2 className="text-lg">Datetime</h2>
            <p>Sept 2nd, 2021</p>
            <p>7:00 PM</p>
            <h2 className="text-lg mt-1">Location</h2>
            <p>Sept 2nd, 2021</p>
          </div>
          <div className="h-1/2 flex flex-col justify-end">
            <div className="h-3/4">
              <p className="mt-2 mx-1 text-2xl font-bold text-justify title h-full">
                asdasdsad adfasdf asdfasdf
              </p>
            </div>
            <div className="h-1/4">
              <Button className="w-full h-full">Register</Button>
            </div>
          </div>
        </div>
      </div>
    </MaterialCard>
    <MaterialCard className="event-card h-80 w-full lg:w-7/12 relative">
      <Tag categories={['1', '2']} />
      <div className="flex h-full">
        <div className="w-1/2 h-full image-container">
          <Image src="/deerfield.png" layout="fill" priority />
        </div>
        <div className="w-1/2 h-full">
          <div className="h-1/2">
            <p>dssd</p>
          </div>
          <div className="h-1/2 flex flex-col justify-end">
            <Button className="m-3">Register</Button>
          </div>
        </div>
      </div>
    </MaterialCard>
  </div>
);

export default EventHighlightSection;
