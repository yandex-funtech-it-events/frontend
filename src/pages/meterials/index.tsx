import EventProfileSection from '../../features/event/components/event-profile-section.tsx';
import { useEvents } from '../../features/event/hooks/use-events.ts';

const MaterialsPage = () => {
  const { events } = useEvents();

  return (
    <EventProfileSection
      title="Материалы мероприятий"
      buttonLabel="Перейти к материалам"
      events={events || []}
    />
  );
};

export default MaterialsPage;
