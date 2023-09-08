import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

import Image from 'next/image';
import HomeImage from 'public/hero.png';

const HomeIntroSection = () => {
  const scrollDown = () => {
    const section = document.querySelector('#about');
    section?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection={{ xs: 'column', md: 'row' }}
      spacing={2}
      minHeight="100vh"
      mt={-8}
    >
      <Grid container item xs={8} gap={8} textAlign={{ xs: 'center', md: 'left' }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          gap={2}
        >
          <LinearProgress sx={{ width: '14rem' }} />
          <Typography variant="h2">University of Toronto Mississauga</Typography>
        </Box>
        <Typography variant="h1">Mathematical & Computational Sciences Society</Typography>
        <Box>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={scrollDown}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            Learn More
          </Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Image src={HomeImage} alt="Home Image" draggable="false" priority />
      </Grid>
    </Grid>
  );
};

export default HomeIntroSection;
