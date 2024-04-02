import { Box, Chip, Typography } from '@mui/material';

const BannerAds = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p={8}
      pb={18}
      maxWidth={680}
      width={1}
      height={1}
      borderRadius={4}
      sx={{
        background:
          'linear-gradient(90deg, rgba(215, 241, 144, 0.85) 0%, rgba(163, 192, 82, 0.85) 100%)',
      }}
    >
      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={1}>
          <Chip label="Chip Filled" />
          <Chip label="Chip Filled" />
        </Box>
        <Typography variant="h1">12/08/2024</Typography>
      </Box>

      <Typography variant="h2">Конференция Яндекса по инфраструктуре</Typography>
    </Box>
  );
};

export default BannerAds;
