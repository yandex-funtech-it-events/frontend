import EventProfileSection from '../../features/event/components/event-profile-section.tsx';
import { posterImages } from '../../libs/constants.ts';

const MaterialsPage = () => {
  return (
    <EventProfileSection
      title="Материалы мероприятий"
      buttonLabel="Перейти к материалам"
      events={posterImages}
    />
  );
};

export default MaterialsPage;
