import { Box } from '@mui/material';
import TextRunner from '../../../components/text-runner.tsx';
import SiteTitle from '../../../components/site-title.tsx';

const Hero = () => {
  return (
    <Box component="section" pt={14} pb={20} display="flex" alignItems="center" gap={10}>
      <SiteTitle />
      <TextRunner text="события IT на одной площадке • митапы и другой текст" />
    </Box>
  );
};

export default Hero;
