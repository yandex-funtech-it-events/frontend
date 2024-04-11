import React from 'react';
import { Box, Link } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FooterTabs: React.FC = () => {
  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      mb={5}
      sx={{ width: '100%', border: '1px solid red' }}
    >
      <nav style={{ gap: '16px', display: 'flex', alignItems: 'center' }}>
        <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>О мероприятии</Link>
        <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>Спикеры</Link>
        <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>Программа</Link>
        <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>Регистрация</Link>
        <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>Карта</Link>
        <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>Сообщества</Link>
        <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>Вопросы</Link>
        <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>Прошлый раз</Link>
        <Box display="flex" gap={1}>
          <Link sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>В начало</Link>
          <ExpandLessIcon />
        </Box>
      </nav>
    </Box>
  );
};

export default FooterTabs;
