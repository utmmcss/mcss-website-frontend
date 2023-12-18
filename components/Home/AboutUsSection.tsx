import { FC } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Image from 'next/image';
import Deerfield from 'public/deerfield.png'; // image from https://www.soundsolutions.ca/projects/featured-exterior-cladding-projects/deerfield-hall-univeristy-of-toronto-mississauga-campus
import Experience from 'public/experience.png';

import { aboutSectionTheme } from '../../style/theme';

const AboutUsSection: FC = () => (
  <ThemeProvider theme={aboutSectionTheme}>
    <Container
      maxWidth={false}
      disableGutters
      id="about"
      sx={{
        display: 'flex',
        flexDirection: { lg: 'row' },
        alignItems: { md: 'center', lg: 'stretch' },
        gap: '2rem',
      }}
    >
      <Box
        sx={{
          width: { lg: 1 / 3, md: 'full' },
          minHeight: { lg: 'full' },
          display: { xs: 'none', lg: 'block' },
        }}
      >
        <Image
          src={Deerfield}
          alt="Deerfield Hall"
          className="min-h-full rounded-lg overflow-hidden"
          draggable="false"
        />
      </Box>

      <Box
        sx={{
          marginTop: 0,
          width: { md: 4 / 5, lg: 2 / 3 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { lg: 'space-between', xl: 'center' },
          textAlign: { md: 'left' },
        }}
      >
        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography
            sx={{
              fontSize: { lg: 23.5, xs: 35 },
              display: { md: 'inline-block' },
              flexDirection: 'column',
              height: { md: '1/3' },
              marginRight: { lg: 2 },
              textAlign: { lg: 'center' },
            }}
          >
            ABOUT US
          </Typography>
          <Divider
            sx={{
              display: 'inline-block',
              height: '0.25rem',
              width: '14rem',
              backgroundColor: '#805ad5',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginY: { xs: 5, lg: 0 },
          }}
        >
          <Box sx={{ width: 1 / 2 }}>
            <Typography
              sx={{
                display: { xs: 'none', md: 'block' },
                fontSize: { md: '2.25rem', lg: '3.75rem' },
                lineHeight: { md: '2.5rem', lg: '1' },
                marginTop: '0.75rem',
                marginBottom: '0.75rem',
                fontWeight: 'bold',
              }}
            >
              FOR THE STUDENTS
            </Typography>
          </Box>
          <Box className="md:block w-1/4 md:w-1/6 m-auto hidden">
            <Image src={Experience} alt="Experience" draggable="false" />
          </Box>
        </Box>
        <Typography
          sx={{
            display: { xs: 'none', md: 'block', lg: 'inline-block' },
            fontWeight: 600,
            paddingBottom: { xl: '1.25rem' },
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            color: '#7E22CE',
          }}
        >
          Academic Society
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              paddingX: { xs: 2, sm: 0, md: 0, lg: 0 },
              fontWeight: 400,
              fontSize: '1rem',
              textAlign: 'left',
            }}
            paragraph
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
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);
export default AboutUsSection;
