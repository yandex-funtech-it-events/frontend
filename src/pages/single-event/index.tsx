import React from 'react';
import { Container } from '@mui/material';
import Header from '../../components/header';
import Info from './components/info';

const SingleEvent: React.FC = () => {
  return (
    <Container sx={{ border: '1px dashed grey' }}>
      <Header />
      <Info />
    </Container>
  );
};

export default SingleEvent;
