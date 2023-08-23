import { createTheme } from '@mui/material/styles';

import COLORS from 'style/colors';

const palette = createTheme({
  palette: {
    primary: {
      main: '#001834',
    },
    secondary: {
      main: '#614C4E',
    },
    error: {
      main: '#FF2424',
    },
    background: {
      default: '#FFF',
    },
    text: {
      primary: '#1D354B',
    },
  },
});

const theme = createTheme(palette, {
  palette: {
    main: palette.palette.augmentColor({
      color: {
        main: COLORS.PRIMARY,
      },
      name: 'main',
    }),
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "'Roboto','Helvetica','BlinkMacSystemFont','Segoe UI','Oxygen'",
    fontSize: 16,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    allVariants: {
      color: '#1D354B',
    },
  },
  zIndex: {
    modal: 2000,
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
        color: 'main',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiLinearProgress: {
      defaultProps: {
        color: 'main',
      },
    },
  },
});

export default theme;
