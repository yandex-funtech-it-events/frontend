import { Box, Chip } from '@mui/material';
import * as React from 'react';

type TagsProps = {
  tags: string[];
  onDelete: (item: string) => void;
};

const Tags = ({ tags, onDelete }: TagsProps) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={3}>
      {tags.map((item) => (
        <Chip
          key={item}
          size="medium"
          variant="outlined"
          label={item}
          onDelete={() => onDelete(item)}
        />
      ))}
    </Box>
  );
};

export default Tags;
