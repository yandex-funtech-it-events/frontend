import React from 'react';
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
import Footer from '../../components/footer';

const SingleEvent: React.FC = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default SingleEvent;
