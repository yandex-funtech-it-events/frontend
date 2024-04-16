import { Alert, Snackbar } from '@mui/material';

type SnackProps = {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  variant?: 'success' | 'error';
};

const Snack = ({ isOpen, onClose, text, variant = 'success' }: SnackProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={variant} variant="filled" sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Snack;
