import EventProfileSection from '../../features/event/components/event-profile-section.tsx';
import { posterImages } from '../../libs/constants.ts';
import { useGetEventsQuery } from '../../features/event/services';

const MaterialsPage = () => {
  const { data: events } = useGetEventsQuery();

  return (
    <EventProfileSection
      title="Материалы мероприятий"
      buttonLabel="Перейти к материалам"
      events={events || []}
    />
  );
};

export default MaterialsPage;
