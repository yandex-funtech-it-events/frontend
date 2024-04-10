import EventProfileSection from '../../features/event/components/event-profile-section.tsx';
import { posterImages } from '../../libs/constants.ts';

const ChatsPage = () => {
  return (
    <EventProfileSection
      title="Ссылки на чаты мероприятий"
      buttonLabel="Перейти в чат"
      events={posterImages}
    />
  );
};

export default ChatsPage;
