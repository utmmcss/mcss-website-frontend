import { FC } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Image from 'next/image';
import Deerfield from 'public/deerfield.png'; // image from https://www.soundsolutions.ca/projects/featured-exterior-cladding-projects/deerfield-hall-univeristy-of-toronto-mississauga-campus
import Experience from 'public/experience.png';

const theme = createTheme({
  typography: {
    fontFamily: ['Segoe UI'].join(','),
  },
});

const AboutUsSection: FC = () => (
  <ThemeProvider theme={theme}>
    <Container
      maxWidth={false}
      disableGutters
      id="about"
      className="about-us-section flex flex-col items-center lg:items-stretch lg:flex-row gap-8"
    >
      <div className="header-img w-full lg:w-1/3 lg:min-h-full  hidden lg:block">
        <Image
          src={Deerfield}
          alt="Deerfield Hall"
          className="min-h-full rounded-lg overflow-hidden"
          draggable="false"
        />
      </div>

      <div className="mt-10 md:w-4/5 lg:mt-0 lg:w-2/3 flex flex-col justify-between xl:justify-center text-center md:text-left">
        <div>
          <Typography
            sx={{ fontSize: { lg: 23.5, xs: 35 } }}
            className="md:inline-block h-1/3 lg:mr-5 lg:text-center flex-col"
          >
            ABOUT US
          </Typography>
          <hr className="inline-block h-1 w-56 bg-purple-600" />
        </div>

        <div className="flex items-center my-5 lg:my-0">
          <div className="w-1/2">
            <p className="hidden md:block md:text-4xl mt-3 mb-3 lg:text-6xl font-bold">
              FOR THE STUDENTS
            </p>
            <p className="hidden md:block lg:hidden text-lg text-purple-700 font-semibold">
              Academic Society
            </p>
          </div>
          <div className="md:block w-1/4 md:w-1/6 m-auto hidden">
            <Image src={Experience} alt="Experience" draggable="false" />
          </div>
        </div>
        <p className="hidden lg:inline-block text-lg text-purple-700 font-semibold  xl:pb-5">
          Academic Society
        </p>
        <div className="flex">
          <Typography
            sx={{ paddingX: { xs: 2, sm: 0, md: 0, lg: 0 } }}
            paragraph
            className="text-med font-normal text-left lg:text-justify"
          >
            Hello students and welcome! UTM Mathematical and Computational Sciences Society (MCSS)
            is the official academic society for the Mathematics and Computational Sciences
            Department. The purpose of the club is to officially represent the students, promote and
            achieve the common interests of the students, encourage academic, social, and career
            related support for the students, maintain open lines of communication between the
            students and the department's faculty and staff, as well as maintain communication
            between the students themselves, and encourage faculty and student interaction outside
            of the formal lecture, tutorial, and lab settings.
          </Typography>
        </div>
      </div>
    </Container>
  </ThemeProvider>
);
export default AboutUsSection;
