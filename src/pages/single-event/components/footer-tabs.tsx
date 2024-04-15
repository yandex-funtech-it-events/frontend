import React from 'react';
import { Box, Link, Container } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { footerNavArray } from '../../../libs/constants';

const FooterTabs: React.FC = () => {
  return (
    <Container sx={{ background: '#fff' }}>
      <Box component="section" display="flex" justifyContent="center">
        <Box
          borderRadius={1}
          sx={{
            position: 'fixed',
            bottom: '40px',
            zIndex: '100',
            padding: '6px 16px',
            background: '#E0E0E0',
            boxShadow:
              '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',
          }}
        >
          <nav style={{ gap: '32px', display: 'flex', alignItems: 'center' }}>
            {footerNavArray.map((item, i) =>
              i === footerNavArray.length - 1 ? (
                <Box key={i} display="flex" gap={1}>
                  <Link
                    href="#header"
                    sx={{
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      color: '#000000DE',
                      '&:hover': {
                        opacity: 0.5,
                      },
                      transition: 'opacity 0.3s',
                    }}
                  >
                    В начало
                  </Link>
                  <ExpandLessIcon />
                </Box>
              ) : (
                <Link
                  key={i}
                  href={item.href}
                  sx={{
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    color: '#000000DE',
                    '&:hover': {
                      opacity: 0.5,
                    },
                    transition: 'opacity 0.3s',
                  }}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </Box>
      </Box>
    </Container>
  );
};

export default FooterTabs;
