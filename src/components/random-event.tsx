import { Box, Button, Fade, Modal, Typography } from '@mui/material';
import { useModal } from '../hooks/use-modal.ts';
import Backdrop from '@mui/material/Backdrop';
import EventCard from '../features/event/components/event-card.tsx';
import TextRunnerCircle from './text-runner-circle.tsx';
import { useAppSelector } from '../libs/store.ts';
import { eventSelectors } from '../features/event/slices';
import { getRandomInteger } from '../libs/utils.ts';
import { useState } from 'react';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 680,
  background: '#F4F1ED',
  border: '0px solid white',
  borderRadius: '20px',
  p: '40px',
};

const RandomEvent = () => {
  const { onOpen, onClose, isOpen, name } = useModal();
  const events = useAppSelector(eventSelectors.getEvents);
  const [eventIndex, setEventIndex] = useState(getRandomInteger(0, events.length));

  return (
    <>
      <TextRunnerCircle onClick={() => onOpen('random-event')} text="рандомное событие" />

      {name === 'random-event' && (
        <Modal
          open={isOpen}
          onClose={onClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={isOpen}>
            <Box sx={style}>
              <Box display="flex" flexDirection="column" alignItems="center" gap={10}>
                <EventCard event={events[eventIndex]} fullWidth />
                <Typography id="transition-modal-title" variant="h3">
                  Случайное событие для вас
                </Typography>
                <Button
                  onClick={() => setEventIndex(getRandomInteger(0, events.length))}
                  variant="contained"
                  sx={{
                    width: 'fit-content',
                  }}
                >
                  посмотреть другое
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
};

export default RandomEvent;
