import { Container, Stack } from '@mui/material';
import TopTen from './components/top-ten.tsx';
import Banner from './components/banner.tsx';
import Hero from './components/hero.tsx';
import EventSection from '../../features/event/components/event-section.tsx';
import BannerRegister from './components/banner-register.tsx';
import EventFilters from '../../features/event/components/event-filters.tsx';
import { useFilteredEvents } from '../../hooks/use-filtered-events.ts';
import { useEvents } from '../../features/event/hooks/use-events.ts';
import { useCurrentUser } from '../../features/user/hooks/use-current-user.ts';

const HomePage = () => {
  const { token } = useCurrentUser();
  const { events, isLoading } = useEvents();
  const { data: filteredEvents, isLoading: isLoadingFilteredEvents, signal } = useFilteredEvents();

  return (
    <Container>
      <Hero />
      <Banner events={events?.slice(0, 3) || []} isLoading={isLoading} />
      <EventSection
        title="Персональная афиша"
        href="/"
        events={events?.slice(0, 4) || []}
        isLoading={isLoading}
      />

      <Stack spacing={13} pt={25}>
        <EventFilters />
        {signal && (
          <EventSection
            title="Результаты поиска"
            events={filteredEvents || []}
            isLoading={isLoadingFilteredEvents}
          />
        )}

        <EventSection
          title="Ближайшие события"
          href="/"
          events={events?.slice(0, 4) || []}
          isLoading={isLoading}
        />
        <EventSection
          title="Все события"
          href="/"
          events={events || []}
          isLoading={isLoading}
          isAllEvents
        />
      </Stack>

      <Stack spacing={20} pt={20} pb={13}>
        <TopTen events={events?.slice(0, 10) || []} />
        <EventSection
          title="Вам понравилось"
          href="/"
          events={events?.slice(0, 4) || []}
          isLoading={isLoading}
        />
        {!token && <BannerRegister />}
      </Stack>
    </Container>
  );
};

export default HomePage;
