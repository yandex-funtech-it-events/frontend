import { ChangeEvent, useEffect, useState } from 'react';
import { EventType } from '../types';

export const useEventSearch = (events: EventType[]) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filter = filteredEvents.filter((event) => event.name.includes(search)) || [];
    setFilteredEvents(filter);
  };

  useEffect(() => {
    if (!search) {
      setFilteredEvents(events);
    }
  }, [search, events]);

  return { filteredEvents, search, handleSearch };
};
