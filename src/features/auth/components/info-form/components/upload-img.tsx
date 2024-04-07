import { Avatar, Box, Button, styled } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

type UploadImgProps = {
  onChange: (file: File) => void;
  value: File | undefined | null;
};

const UploadImg = ({ value, onChange }: UploadImgProps) => {
  const [preview, setPreview] = useState('');

  const handleUploadedFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const urlImage = URL.createObjectURL(file);
      setPreview(urlImage);
      onChange(file);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={3}>
      {preview ? (
        <Avatar
          src={preview}
          alt="avatar"
          sx={{
            borderRadius: '4px',
            width: 56,
            height: 56,
          }}
        />
      ) : (
        <Avatar
          sx={{
            borderRadius: '4px',
          }}
        />
      )}

      <Button component="label" role={undefined} color="secondary" tabIndex={-1}>
        {value ? 'Изменить фото' : 'загрузить фото'}
        <VisuallyHiddenInput type="file" onChange={handleUploadedFile} />
      </Button>
    </Box>
  );
};

export default UploadImg;
