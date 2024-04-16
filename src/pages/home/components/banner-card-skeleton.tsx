import { Skeleton } from '@mui/material';

const BannerCardSkeleton = () => {
  return (
    <Skeleton
      variant="rounded"
      width={1376}
      height={480}
      sx={{
        borderRadius: '20px',
      }}
    />
  );
};

export default BannerCardSkeleton;
