import { Box, Chip, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import * as React from 'react';

type SubDirectionsProps = {
  directions: string[];
  tags: string[];
  onClose: () => void;
  onClick: (item: string) => void;
  onDelete: (item: string) => void;
};

const SubDirections = ({ directions, tags, onClose, onClick, onDelete }: SubDirectionsProps) => {
  return (
    <Box
      px={4}
      py={5}
      display="flex"
      justifyContent="space-between"
      gap={7}
      borderRadius={4}
      sx={{
        background: 'rgba(20, 18, 22, 0.05)',
      }}
    >
      <Box display="flex" flexWrap="wrap" gap={3}>
        {directions.map((el) => {
          if (tags.includes(el)) {
            return (
              <Chip
                key={el}
                size="medium"
                variant="outlined"
                label={el}
                onClick={() => onClick(el)}
                onDelete={() => onDelete(el)}
              />
            );
          } else {
            return (
              <Chip
                key={el}
                size="medium"
                variant="outlined"
                label={el}
                onClick={() => onClick(el)}
              />
            );
          }
        })}
      </Box>

      <IconButton
        onClick={onClose}
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        <CloseOutlined />
      </IconButton>
    </Box>
  );
};

export default SubDirections;
