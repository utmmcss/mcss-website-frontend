import { FC } from 'react';
import MediaQuery from 'react-responsive';

import IconButton from '@components/Common/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Card from '@components/Common/Card';
import SectionWrapper from '@components/Common/SectionWrapper';
import { breakPoints } from '@utils/constants';

const JoinUsSection: FC = () => (
  <>
    <MediaQuery maxWidth={breakPoints.md}>
      <SectionWrapper title="JOIN US" subtitle="CALL TO ACTION">
        <div className="flex justify-center px-10">
          <div>
            <div className="m-5 text-grey font-semibold">EXECUTIVES</div>
            <div className="m-5 text-3xl font-medium">0</div>
          </div>
          <div>
            <div className="m-5 text-grey font-semibold">ASSOCIATES</div>
            <div className="m-5 text-3xl font-medium">0</div>
          </div>
          <div className="flex flex-col justify-center">
            <IconButton icon={<ArrowForward className="ml-3 m-auto" />}>Join Us</IconButton>
          </div>
        </div>
      </SectionWrapper>
    </MediaQuery>
    <MediaQuery minWidth={breakPoints.md}>
      <Card className="m-10 my-10 mb-0 h-2/5 flex justify-center items-center p-20 bg-white">
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
            <IconButton icon={<ArrowForward className="ml-3 m-auto" />}>Join Us</IconButton>
          </div>
        </div>
      </Card>
    </MediaQuery>
  </>
);

export default JoinUsSection;
