import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import { createTheme } from '@mui/material';
import { forwardRef } from 'react';

declare module '@mui/material/styles' {
  interface TypeText {
    tertiary?: string;
  }

  interface Palette {
    text: TypeText;
  }

  interface PaletteOptions {
    text?: Partial<TypeText> | undefined;
  }
}

declare module '@mui/material/styles' {
  interface TypeBackground {
    black: string;
    gray: string;
    light: string;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    palette: PaletteOptions & {
      text: {
        tertiary: string;
      };
    };
  }

  interface ThemeOptions {
    palette?: PaletteOptions;
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
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '5px',
        },
      },
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
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
          },
        },
      ],
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
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontWeight: 800,
      fontSize: '40px',
      lineHeight: '120%',
      letterSpacing: '0.46px',
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
