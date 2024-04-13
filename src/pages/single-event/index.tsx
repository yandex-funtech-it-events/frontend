import React from 'react';
import { Container } from '@mui/material';
import Header from '../../components/header';
import Info from './components/info';
import Benefits from './components/benefits';
import AboutEvent from './components/about-event';
import Speakers from './components/speakers';
import Register from './components/register';
import Map from './components/map';
import Community from './components/community';
import Questions from './components/questions';
import HowItWas from './components/how-it-was';
import EventProgram from './components/event-program';
import FooterTabs from './components/footer-tabs';

const SingleEvent: React.FC = () => {
  return (
    <Container sx={{ border: '1px dashed grey' }}>
      <Header />
      <Info />
      <AboutEvent />
      <Benefits />
      {/*Тут надо разбираться со слайдером */}
      <Speakers />
      {/*Тут надо верстать программу, для нее еще нет компонента*/}
      <EventProgram />
      <Register />
      <Map />
      <Community />
      <Questions />
      <HowItWas />
      <FooterTabs />
    </Container>
  );
};

export default SingleEvent;
