import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

import Image from 'next/image';
import HomeImage from 'public/hero.png';

const HomeIntroSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid container item xs={8} gap={2}>
        <Box display="flex" alignItems="center">
          <LinearProgress className="w-56" />
          <Typography className="ml-4 text-2xl">University of Toronto Mississauga</Typography>
        </Box>
        <Typography className="text-4xl md:text-5xl mt-3 mb-5 lg:text-7xl text-center md:text-left font-sans">
          Mathematical and Computational Sciences Society
        </Typography>
        <Box>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            className="hidden md:inline-flex"
            href="#about"
          >
            Learn More
          </Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Image src={HomeImage} alt="Home Image" draggable="false" />
      </Grid>
    </Grid>
  );
};

export default HomeIntroSection;
