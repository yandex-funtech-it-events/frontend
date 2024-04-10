import { ChangeEvent, useEffect, useState } from 'react';

const UseEventSearch = (
  events: Array<{
    img: string;
    title: string;
    cols?: number;
    rows?: number;
  }>
) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filter = filteredEvents.filter((event) => event.title.includes(search)) || [];
    setFilteredEvents(filter);
  };

  useEffect(() => {
    if (!search) {
      setFilteredEvents(events);
    }
  }, [search, events]);

  return { filteredEvents, search, handleSearch };
};

export default UseEventSearch;
