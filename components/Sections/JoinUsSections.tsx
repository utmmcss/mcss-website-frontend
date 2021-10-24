import { FC } from 'react';
import IconButton from '@components/Common/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Card from '@components/Common/Card';

const JoinUsSection: FC = () => (
  <Card className="m-10 my-10 h-2/5 flex items-center p-20 bg-white">
    <div className="flex justify-between flex-row gap-20 p-50">
      <div className="flex-col">
        <div className="m-5 text-grey font-semibold">CALL TO ACTION</div>
        <div className="m-5 text-6xl font-medium">JOIN OUR TEAM</div>
        <div className="m-5 text-grey font-semibold">CONTRIBUTE TO OUR COMMUNITY</div>
      </div>
      <div className="flex-col">
        <div className="m-5 text-grey font-semibold">EXECUTIVES</div>
        <div className="m-5 text-6xl font-medium">0</div>
      </div>
      <div className="flex-col">
        <div className="m-5 text-grey font-semibold">ASSOCIATES</div>
        <div className="m-5 text-6xl font-medium">0</div>
      </div>
      <div className="flex flex-col justify-center">
        <IconButton icon={<ArrowForward className="ml-3" />}>Join Us</IconButton>
      </div>
    </div>
  </Card>
);

export default JoinUsSection;
