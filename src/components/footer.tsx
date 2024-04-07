import { Box, Button, IconButton } from '@mui/material';
import Logo from './logo.tsx';
import SiteTitle from './site-title.tsx';

const Footer = () => {
  return (
    <Box
      component="footer"
      pt={10}
      px={10}
      pb={25}
      minHeight={284}
      sx={{
        position: 'relative',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        background: 'rgba(255, 255, 255, 0.80)',
        overflow: 'hidden',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={10}>
          <Logo />

          <Box>
            <Button href="/afisha" variant="link">
              Афиша
            </Button>
            <Button href="/profile" variant="link">
              Личный кабинет
            </Button>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={5}>
          <Button href="/events" color="secondary">
            Предложить событие
          </Button>
          <Button href="/help" variant="outlined">
            Поддержка
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '-10px',
        }}
      >
        <SiteTitle />
      </Box>

      <IconButton
        sx={{
          position: 'absolute',
          right: '40px',
          bottom: '24px',
        }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="34" height="34" rx="17" fill="black" fillOpacity="0.12" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8815 17.7817L19.4134 13.7901C19.9435 13.4661 20.636 13.6332 20.9599 14.1634C21.2839 14.6935 21.1168 15.386 20.5866 15.7099L14.8796 19.1976L19.6552 23.9732C19.9925 24.3105 20.45 24.5 20.927 24.5C21.6805 24.5 22.3542 24.0303 22.6147 23.3232L26.6533 12.3613C26.7173 12.1876 26.75 12.004 26.75 11.8189C26.75 10.9524 26.0476 10.25 25.1811 10.25H25.0257C24.8743 10.25 24.7235 10.2699 24.5774 10.3093L8.03431 14.7632C7.57157 14.8878 7.25 15.3074 7.25 15.7866C7.25 16.2918 7.60659 16.7268 8.10199 16.8258L12.8815 17.7817ZM7.66072 19.0321L12.5 20L18.0642 25.5642C18.8235 26.3235 19.8532 26.75 20.927 26.75C22.6232 26.75 24.1395 25.6927 24.7259 24.101L28.7645 13.1391C28.9203 12.7164 29 12.2694 29 11.8189C29 9.70978 27.2902 8 25.1811 8H25.0257C24.6767 8 24.3293 8.04595 23.9924 8.13666L7.44937 12.5906C6.00424 12.9796 5 14.29 5 15.7866C5 17.3643 6.11363 18.7227 7.66072 19.0321Z"
            fill="white"
          />
        </svg>
      </IconButton>
    </Box>
  );
};

export default Footer;
