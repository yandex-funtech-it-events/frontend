import React from 'react';
import { Box, Link, Container } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { footerNavArray } from '../../../libs/constants';

const FooterTabs: React.FC = () => {
  return (
    <Container>
      <Box
        component="section"
        display="flex"
        justifyContent="center"
        mb={10}
        sx={{ width: '100%', border: '1px solid red' }}
      >
        <Box
          borderRadius={1}
          sx={{
            border: '1px solid green',
            padding: '6px 16px',
            background: '#E0E0E0',
          }}
        >
          <nav style={{ gap: '32px', display: 'flex', alignItems: 'center' }}>
            {footerNavArray.map((item, i) =>
              i === footerNavArray.length - 1 ? (
                <Box key={i} display="flex" gap={1}>
                  <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>В начало</Link>
                  <ExpandLessIcon />
                </Box>
              ) : (
                <Link key={i} sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>
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
