import EventProfileSection from '../../features/event/components/event-profile-section.tsx';
import { useGetEventsQuery } from '../../features/event/services';

const ChatsPage = () => {
  const { data: events } = useGetEventsQuery();

  return (
    <EventProfileSection
      title="Ссылки на чаты мероприятий"
      buttonLabel="Перейти в чат"
      events={events || []}
    />
  );
};

export default ChatsPage;
