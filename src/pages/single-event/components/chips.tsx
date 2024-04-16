import React from 'react';

import { Box, Chip } from '@mui/material';
import { useAppSelector } from '../../../libs/store';
import { eventSelectors } from '../../../features/event/slices';

const Chips: React.FC = () => {
  const event = useAppSelector(eventSelectors.getEvent);
  const tags = event?.tags;
  return <Box display="flex">{tags?.map((chip, i) => <Chip label={chip.name} key={i} />)}</Box>;
};

export default Chips;
