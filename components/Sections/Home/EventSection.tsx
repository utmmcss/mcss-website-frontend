import { FC } from 'react';
import Image from 'next/image';
import Card from '@components/Common/Card';
import IconButton from '@components/Common/IconButton';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const EventSection: FC = () => {
  const eventCardInfos = [
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 25',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 26',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 27',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 28',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
    },
  ];

  return (
    <div className="event-section">
      <hr className="mt-3 w-8 h-1 text-center mx-auto mb-2 bg-purple-600" />
      <p className="text-center text-gray-400 mb-2">CONNECT</p>
      <h1 className="text-4xl text-center font-bold">EVENTS</h1>
      <div className="flex flex-wrap mt-10">
        {eventCardInfos.map(({ imgSrc, date, author, description }) => (
          <div
            className="w-full sm:w-1/3 md:w-1/4 px-6 py-4"
            key={`${date}${author}${description}`}
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
                <p className="mt-2 mx-1 text-lg font-bold text-justify">{description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <IconButton className="w-48 h-14" icon={<ArrowForwardIcon className="ml-3" />}>
          More Events
        </IconButton>
      </div>
    </div>
  );
};

export default EventSection;
