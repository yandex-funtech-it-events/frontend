import { Button, Container, Stack } from '@mui/material';
import Header from '../../components/header';
import Hero from './components/hero.tsx';
import Banner from './components/banner.tsx';
import UpcomingEvents from './components/upcoming-events.tsx';
import Poster from './components/poster.tsx';
import TopThree from './components/top-three.tsx';

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Banner />

      <Stack spacing={16} pt={10}>
        <UpcomingEvents />
        <Poster />

        <Button style={{ marginTop: '40px' }}>Загрузить еще события</Button>

        <TopThree />
      </Stack>
    </Container>
  );
};

export default HomePage;
