import Hero from './components/hero.tsx';
import { Container } from '@mui/material';
import Header from '../../components/header';

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};

export default HomePage;
