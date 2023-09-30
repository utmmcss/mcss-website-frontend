import { ReactNode } from 'react';

import Grid from '@mui/material/Grid';

type Props = {
  children: ReactNode;
};

const DetailPageContainer = (props: Props) => {
  const { children } = props;
  return (
    <Grid
      display="flex"
      flexDirection="column"
      rowGap="2rem"
      sx={{ padding: { xs: '2.5rem 1.25rem', md: '2.5rem 8rem', lg: '2.5rem 16rem' } }}
    >
      {children}
    </Grid>
  );
};

export default DetailPageContainer;
