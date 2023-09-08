import { FC } from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

import Card from '@components/Common/Card';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import SectionWrapper from '@components/Common/SectionWrapper';
import { useAppSelector } from '@store/hooks';

const JoinUsSection: FC = () => {
  const { members } = useAppSelector((state) => state.members);
  const numExecs = members.filter((member) => member.executive).length;
  const numAssociates = members.length - numExecs;

  return (
    <>
      <MediaQueryContainer showOnMobile>
        <SectionWrapper title="JOIN US" subtitle="CALL TO ACTION">
          <div className="flex justify-center px-10">
            <div>
              <div className="m-5 text-grey font-semibold">EXECUTIVES</div>
              <div className="flex justify-center m-5 text-3xl font-medium">{numExecs}</div>
            </div>
            <div>
              <div className="m-5 text-grey font-semibold">ASSOCIATES</div>
              <div className="flex justify-center m-5 text-3xl font-medium">{numAssociates}</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center">
              <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                Join Us
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <Card className="hidden m-10 my-10 mb-0 h-2/5 md:flex justify-center items-center p-20 bg-white">
          <div className="flex justify-between flex-row gap-20 p-50">
            <div className="flex-col">
              <div className="m-5 text-grey font-semibold">CALL TO ACTION</div>
              <div className="m-5 text-6xl font-medium">JOIN OUR TEAM</div>
              <div className="m-5 text-grey font-semibold">CONTRIBUTE TO OUR COMMUNITY</div>
            </div>
            <div className="flex-col">
              <div className="m-5 text-grey font-semibold">EXECUTIVES</div>
              <div className="m-5 text-6xl font-medium">{numExecs}</div>
            </div>
            <div className="flex-col">
              <div className="m-5 text-grey font-semibold">ASSOCIATES</div>
              <div className="m-5 text-6xl font-medium">{numAssociates}</div>
            </div>
            <div className="flex flex-col justify-center">
              <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                Join Us
              </Button>
            </div>
          </div>
        </Card>
      </MediaQueryContainer>
    </>
  );
};

export default JoinUsSection;
