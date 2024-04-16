import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import { createTheme } from '@mui/material';
import { forwardRef } from 'react';
import type {} from '@mui/lab/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';

declare module '@mui/material/styles' {
  interface TypeBackground {
    black: string;
    gray: string;
    light: string;
  }

  interface TypeText {
    tertiary: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    link: true;
  }
}

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: ' 0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
            backgroundColor: '#FF6E2C',
          },
        },
      },
      variants: [
        {
          props: { size: 'large' },
          style: {
            minHeight: '48px',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '26px',
            letterSpacing: '0.46px',
          },
        },
        {
          props: { size: 'medium' },
          style: {
            minHeight: '40px',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '26px',
            letterSpacing: '0.4px',
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            background: '#E0E0E0',
            color: 'rgba(0, 0, 0, 0.87)',
            padding: '6px 16px',
            ':hover': {
              background: '#F5F5F5',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid rgba(0, 0, 0, 0.87)',
            color: 'rgba(0, 0, 0, 0.87)',
            ':hover': {
              background: '#F5F5F5',
              border: '1px solid rgba(0, 0, 0, 0.87)',
            },
          },
        },
        {
          props: { variant: 'link' },
          style: {
            border: '0px solid  rgba(0, 0, 0, 0.12)',
            minHeight: '40px',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '26px',
            letterSpacing: '0.46px',
            color: 'rgba(0, 0, 0, 0.60)',
            ':hover': {
              background: 'rgba(0, 0, 0, 0.04)',
              color: 'rgba(0, 0, 0, 0.87)',
            },
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
          },
        },
        {
          props: { size: 'medium' },
          style: {
            height: '40px',
            paddingLeft: '8px',
            paddingRight: '8px',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
          },
        },
      ],
      styleOverrides: {
        root: {
          height: 'fit-content',
          borderRadius: '100px',
        },
        label: {
          paddingTop: '4px',
          paddingBottom: ' 4px',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.15px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 600px)': {
            padding: '0 16px',
          },
          '@media (min-width: 1200px)': {
            maxWidth: 1440,
            padding: '0 32px',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          '@media (min-width: 600px)': {
            minHeight: 'auto',
            padding: 0,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: ['Roboto', 'sans-serif'].join(','),
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
          letterSpacing: '0.15px',
          color: 'rgba(0, 0, 0, 0.60)',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: ['Roboto', 'sans-serif'].join(','),
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '24px',
          letterSpacing: '0.4px',
          color: 'rgba(0, 0, 0, 0.60)',
          '&:hover': {
            borderRadius: '4px',
          },
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
  spacing: 4,
  typography: {
    fontFamily: ['Roboto', 'Inter', 'Montserrat', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontWeight: 600,
      fontSize: '56px',
      lineHeight: '120%',
      letterSpacing: '1px',
    },
    h2: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: '120%',
      letterSpacing: '1px',
    },
    h3: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '130%',
      letterSpacing: '1px',
    },
    h6: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '130%',
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '157%',
      letterSpacing: '0.1px',
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '150%',
      letterSpacing: '0.15px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '130%',
      letterSpacing: '0.15px',
      color: 'rgba(0, 0, 0, 0.60)',
    },
    button: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    overline: {
      fontWeight: 900,
      fontSize: '68px',
      lineHeight: '120%',
      letterSpacing: '1px',
      color: 'white',
    },
  },
  palette: {
    text: {
      tertiary: 'rgba(0,0,0,.38)',
    },
    background: {
      black: 'text.primary',
      gray: 'rgb(244,241,237)',
      light: 'rgba(20, 18, 22, 0.05)',
    },
    primary: {
      main: '#FF4D00',
      light: '#FF6E2C',
    },
  },
});

export default theme;
