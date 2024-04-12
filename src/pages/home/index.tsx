import { Container, Stack } from '@mui/material';
import Header from '../../components/header';
import TopTen from './components/top-ten.tsx';
import Banner from './components/banner.tsx';
import Hero from './components/hero.tsx';
import EventSection from '../../features/event/components/event-section.tsx';
import { posterImages } from '../../libs/constants.ts';
import BannerRegister from './components/banner-register.tsx';
import Footer from '../../components/footer.tsx';
import EventFilters from '../../features/event/components/event-filters.tsx';

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Banner />
        <EventSection title="Персональная афиша" href="/" events={posterImages.slice(0, 4)} />

        <Stack spacing={13} pt={25}>
          {/*//filters here*/}
          <EventFilters />
          <EventSection title="Ближайшие события" href="/" events={posterImages.slice(0, 4)} />
          <EventSection title="Все события" href="/" events={posterImages} isAllEvents />
        </Stack>

        <Stack spacing={20} pt={20} pb={13}>
          <TopTen events={posterImages.slice(0, 10)} />
          <EventSection title="Вам понравилось" href="/" events={posterImages.slice(0, 4)} />
          <BannerRegister />
        </Stack>
      </Container>

      <Footer />
    </>
  );
};

export default HomePage;
