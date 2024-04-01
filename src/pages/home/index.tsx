import Hero from './components/hero.tsx';
import { Container } from '@mui/material';
import Header from '../../components/header';
import Banner from './components/banner.tsx';

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Banner />
    </Container>
  );
};

export default HomePage;
