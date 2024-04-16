import EventProfileSection from '../../features/event/components/event-profile-section.tsx';
import { useEvents } from '../../features/event/hooks/use-events.ts';

const ChatsPage = () => {
  const { events } = useEvents();

  return (
    <EventProfileSection
      title="Ссылки на чаты мероприятий"
      buttonLabel="Перейти в чат"
      events={events || []}
    />
  );
};

export default ChatsPage;
