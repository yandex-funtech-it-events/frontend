import React from 'react';
import { Container } from '@mui/material';
import Header from '../../components/header';
import Info from './components/info';
import Benefits from './components/benefits';
import AboutEvent from './components/about-event';
import Speakers from './components/speakers';
import Register from './components/register';

const SingleEvent: React.FC = () => {
  return (
    <Container sx={{ border: '1px dashed grey' }}>
      <Header />
      <Info />
      <Benefits />
      <AboutEvent />
      {/*Тут надо разбираться со слайдером */}
      <Speakers />
      {/*Тут надо верстать программу, для нее еще нет компонента*/}
      <Register />
    </Container>
  );
};

export default SingleEvent;
