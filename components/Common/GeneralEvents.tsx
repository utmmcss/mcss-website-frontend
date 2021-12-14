import { FC } from 'react';
import Image from 'next/image';
import Card from '@components/Common/Card';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

type GeneralEventsProps = {
  eventCardInfos: Array<EventCardInfosTypes>;
};

type EventCardInfosTypes = {
  imgSrc: string;
  date: string;
  author: string;
  description: string;
};

const GeneralEvents: FC<GeneralEventsProps> = ({ eventCardInfos }) => (
  <div className="event-section md:m-0 lg:mx-20 2xl:mx-40">
    <div className="flex flex-wrap mt-10">
      {eventCardInfos.map(({ imgSrc, date, author, description, key }) => (
        <div
          className="w-full sm:w-1/3 md:w-1/4 px-6 py-4"
          key={key}
        >
          <Card className="card rounded-lg relative">
            <div className="tag">Food</div>
            <div className="w-full h-1/2 image-container">
              <Image src={imgSrc} layout="fill" />
            </div>
            <div className="mt-5 h-1/2 p-1 px-3">
              <div className="flex">
                <div className="flex w-1/2">
                  <EventOutlinedIcon className="mr-1" />
                  <p>{date}</p>
                </div>
                <div className="flex w-1/2">
                  <PersonOutlineOutlinedIcon />
                  <p className="ml-1">{author}</p>
                </div>
              </div>
              <p className="mt-2 mx-1 text-lg font-bold text-justify">
                {description}
              </p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  </div>
);

GeneralEvents.defaultProps = {
  eventCardInfos: [
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 25',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
      key: '1',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 26',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
      key: '2',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 27',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
      key: '3',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 28',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
      key: '4',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 28',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
      key: '5',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 28',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
      key: '6',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 28',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
      key: '7',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 28',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
      key: '8',
    },
  ],
};

export default GeneralEvents;
