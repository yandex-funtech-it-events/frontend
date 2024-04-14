import { Box, Container, Stack } from '@mui/material';
import Header from '../../components/header';
import TopTen from './components/top-ten.tsx';
import Banner from './components/banner.tsx';
import Hero from './components/hero.tsx';
import EventSection from '../../features/event/components/event-section.tsx';
import BannerRegister from './components/banner-register.tsx';
import Footer from '../../components/footer.tsx';
import EventFilters from '../../features/event/components/event-filters.tsx';
import { useFilteredEvents } from '../../hooks/use-filtered-events.ts';
import { useGetEventsQuery } from '../../features/event/services';
import eventCard from '@/assets/images/event_card.png';
import TextRunnerCircle from '../../components/text-runner-circle.tsx';
import RandomEvent from '../../components/random-event.tsx';

const HomePage = () => {
  const { data: events, isLoading } = useGetEventsQuery();
  const { data: filteredEvents, isLoading: isLoadingFilteredEvents } = useFilteredEvents();
  const data = [
    {
      id: 0,
      name: 'string',
      description: 'string',
      format: 'string',
      city: 'string',
      slide: eventCard,
      address: 'string',
      pedestrian_coordinates: 'string',
      taxi_coordinates: 'string',
      published_at: '2024-04-13T16:26:16.865Z',
      registration_open_at: '2024-04-13T16:26:16.865Z',
      registration_close_at: '2024-04-13T16:26:16.865Z',
      start_at: '2024-04-13T16:26:16.865Z',
      end_at: '2024-04-13T16:26:16.865Z',
      video_archive_url: 'string',
      price: 0,
      creator_id: 0,
      moderation_passed: true,
      moderator_id: 0,
    },
    {
      id: 1,
      name: 'string',
      description: 'string',
      format: 'string',
      city: 'string',
      slide: eventCard,
      address: 'string',
      pedestrian_coordinates: 'string',
      taxi_coordinates: 'string',
      published_at: '2024-04-13T16:26:16.865Z',
      registration_open_at: '2024-04-13T16:26:16.865Z',
      registration_close_at: '2024-04-13T16:26:16.865Z',
      start_at: '2024-04-13T16:26:16.865Z',
      end_at: '2024-04-13T16:26:16.865Z',
      video_archive_url: 'string',
      price: 0,
      creator_id: 0,
      moderation_passed: true,
      moderator_id: 0,
    },
    {
      id: 2,
      name: 'string',
      description: 'string',
      format: 'string',
      city: 'string',
      slide: eventCard,
      address: 'string',
      pedestrian_coordinates: 'string',
      taxi_coordinates: 'string',
      published_at: '2024-04-13T16:26:16.865Z',
      registration_open_at: '2024-04-13T16:26:16.865Z',
      registration_close_at: '2024-04-13T16:26:16.865Z',
      start_at: '2024-04-13T16:26:16.865Z',
      end_at: '2024-04-13T16:26:16.865Z',
      video_archive_url: 'string',
      price: 0,
      creator_id: 0,
      moderation_passed: true,
      moderator_id: 0,
    },
    {
      id: 3,
      name: 'string',
      description: 'string',
      format: 'string',
      city: 'string',
      slide: eventCard,
      address: 'string',
      pedestrian_coordinates: 'string',
      taxi_coordinates: 'string',
      published_at: '2024-04-13T16:26:16.865Z',
      registration_open_at: '2024-04-13T16:26:16.865Z',
      registration_close_at: '2024-04-13T16:26:16.865Z',
      start_at: '2024-04-13T16:26:16.865Z',
      end_at: '2024-04-13T16:26:16.865Z',
      video_archive_url: 'string',
      price: 0,
      creator_id: 0,
      moderation_passed: true,
      moderator_id: 0,
    },
    {
      id: 4,
      name: 'string',
      description: 'string',
      format: 'string',
      city: 'string',
      slide: eventCard,
      address: 'string',
      pedestrian_coordinates: 'string',
      taxi_coordinates: 'string',
      published_at: '2024-04-13T16:26:16.865Z',
      registration_open_at: '2024-04-13T16:26:16.865Z',
      registration_close_at: '2024-04-13T16:26:16.865Z',
      start_at: '2024-04-13T16:26:16.865Z',
      end_at: '2024-04-13T16:26:16.865Z',
      video_archive_url: 'string',
      price: 0,
      creator_id: 0,
      moderation_passed: true,
      moderator_id: 0,
    },
    {
      id: 5,
      name: 'string',
      description: 'string',
      format: 'string',
      city: 'string',
      slide: eventCard,
      address: 'string',
      pedestrian_coordinates: 'string',
      taxi_coordinates: 'string',
      published_at: '2024-04-13T16:26:16.865Z',
      registration_open_at: '2024-04-13T16:26:16.865Z',
      registration_close_at: '2024-04-13T16:26:16.865Z',
      start_at: '2024-04-13T16:26:16.865Z',
      end_at: '2024-04-13T16:26:16.865Z',
      video_archive_url: 'string',
      price: 0,
      creator_id: 0,
      moderation_passed: true,
      moderator_id: 0,
    },
  ];

  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Banner events={data?.slice(0, 3) || []} isLoading={isLoading} />
        <EventSection
          title="Персональная афиша"
          href="/"
          events={data?.slice(0, 4) || []}
          isLoading={isLoading}
        />

        <Stack spacing={13} pt={25}>
          <EventFilters />
          {filteredEvents && (
            <EventSection
              title="Результаты поиска"
              events={filteredEvents || []}
              isLoading={isLoadingFilteredEvents}
            />
          )}

          <EventSection
            title="Ближайшие события"
            href="/"
            events={data?.slice(0, 4) || []}
            isLoading={isLoading}
          />
          <EventSection
            title="Все события"
            href="/"
            events={data || []}
            isLoading={isLoading}
            isAllEvents
          />
        </Stack>

        <Stack spacing={20} pt={20} pb={13}>
          <TopTen events={data?.slice(0, 10) || []} />
          <EventSection
            title="Вам понравилось"
            href="/"
            events={data?.slice(0, 4) || []}
            isLoading={isLoading}
          />
          <BannerRegister />
        </Stack>
      </Container>

      <Footer />
    </>
  );
};

export default HomePage;
