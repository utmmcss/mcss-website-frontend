import { ReactNode } from 'react';

import Container from '@mui/material/Container';

type Props = {
  children: ReactNode;
};

const DetailPageContainer = (props: Props) => {
  const { children } = props;
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
      {children}
    </Container>
  );
};

export default DetailPageContainer;
