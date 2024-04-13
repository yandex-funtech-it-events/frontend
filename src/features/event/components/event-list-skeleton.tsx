import { Box, Skeleton } from '@mui/material';

const EventListSkeleton = () => {
  return (
    <Box
      component="ul"
      display="flex"
      flexWrap="wrap"
      gap={4}
      m={0}
      p={0}
      sx={{ listStyle: 'none' }}
    >
      {Array.from({ length: 4 }).map((item, index) => (
        <li key={index}>
          <Skeleton variant="rounded" width={331} height={415} sx={{ borderRadius: '20px' }} />
        </li>
      ))}
    </Box>
  );
};

export default EventListSkeleton;
