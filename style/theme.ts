import { createTheme } from '@mui/material/styles';

import COLORS from 'style/colors';

const base = createTheme({
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

const theme = createTheme(base, {
  palette: {
    main: base.palette.augmentColor({
      color: {
        main: COLORS.PRIMARY,
      },
      name: 'main',
    }),
  },
  typography: {
    fontFamily: "'Roboto','Helvetica','BlinkMacSystemFont','Segoe UI','Oxygen'",
    fontSize: 16,
    h1: {
      fontSize: '2rem',
      [base.breakpoints.up('md')]: {
        fontSize: '3rem',
      },
      [base.breakpoints.up('lg')]: {
        fontSize: '4.5rem',
      },
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
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
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 1400,
          position: 'relative',
          [base.breakpoints.up('lg')]: {
            maxWidth: 1140,
          },
          [base.breakpoints.up('xl')]: {
            maxWidth: 1320,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: 'flex',
          boxShadow: '3px 5px 11px 3px rgba(0, 0, 0, 0.13)',

          flexDirection: 'column',
          [base.breakpoints.up('md')]: {
            flexDirection: 'row',
          },
          borderRadius: '0.375rem',
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: '100%',
          minHeight: '200px',
          position: 'relative',
          maxWidth: '100%',
          backgroundColor: 'rgb(205, 180, 248)',
          [base.breakpoints.up('md')]: {
            flexDirection: 'row',
            maxWidth: '66%',
          },

          '.tag': {
            position: 'absolute',
            padding: '10px 15px',
            zIndex: 1000,
            top: 0,
            left: 0,
            right: 0,
            color: 'white',
            background: 'rgba(124, 58, 237, 0.8)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',

          [base.breakpoints.up('md')]: {
            width: '50%',
          },

          '.MuiTypography-h1': {
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: '2rem',
            marginBottom: '1rem',
          },

          '.MuiTypography-h2': {
            fontWeight: 700,
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          },

          '.MuiButton-root': {
            minHeight: '40px',
            marginTop: '1rem',
          },
        },
      },
    },
  },
});

export default theme;
