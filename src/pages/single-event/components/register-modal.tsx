import { Box, Button, Fade, Modal, Typography } from '@mui/material';
import close from '../../../assets/icons/close.svg';
import { useModal } from '../../../hooks/use-modal.ts';
import Backdrop from '@mui/material/Backdrop';
import { mockInfoArray } from '../../../libs/constants';
import Chips from './chips';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 844,
  background: '#F4F1ED',
  border: '0px solid white',
  borderRadius: '20px',
  p: '16px 32px 40px 32px',
};

const RegisterModal = () => {
  const { onClose, isOpen, name } = useModal();

  return (
    <>
      {name === 'register-modal' && (
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
              <Box display="flex" flexDirection="column" alignItems="center" gap={8}>
                <img
                  src={close}
                  alt="close icon"
                  style={{ alignSelf: 'end', cursor: 'pointer' }}
                  onClick={onClose}
                />
                <Typography component="p" variant="h3">
                  Поздравляю, вы зарегистрированы!
                </Typography>
                <Typography component="p" variant="h6">
                  Саммит Кибербезопасности: Обеспечение защиты в цифровом мире
                </Typography>
                <Box display="flex" gap={8}>
                  {mockInfoArray.map((text, i) => (
                    <Typography variant="h6" key={i}>
                      {text}
                    </Typography>
                  ))}
                </Box>
                <Chips />
                <Button
                  variant="contained"
                  sx={{
                    width: 'fit-content',
                    padding: '8px 22px',
                  }}
                >
                  добавить в календарь
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
};

export default RegisterModal;
