import React from 'react';
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
import RegisterModal from './components/register-modal';

const SingleEvent: React.FC = () => {
  return (
    <>
      <Info />
      <AboutEvent />
      <Benefits />
      <Speakers />
      <EventProgram />
      <Register />
      <Map />
      <Community />
      <Questions />
      <HowItWas />
      <FooterTabs />
      <RegisterModal />
    </>
  );
};

export default SingleEvent;
