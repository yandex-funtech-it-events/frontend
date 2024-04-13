import React from 'react';
import { Typography, Box } from '@mui/material';
import Chips from '../../chips';
import { mockInfoArray } from '../../../../../libs/constants';

const FullInfo: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" maxWidth="912px">
      <Box display="flex" gap={7} mb={6}>
        {mockInfoArray.map((text, i) => (
          <Typography variant="h6" key={i}>
            {text}
          </Typography>
        ))}
      </Box>

      <Chips />

      <Typography variant="body1" component="p" maxWidth="912px" mt={6}>
        ECOLOGICSTUDIO IS AN ARCHITECTURE AND DESIGN INNOVATION FIRM SPECIALISING IN DEVELOPING
        BIOTECHNOLOGY FOR THE BUILT ENVIRONMENT. <br />
        ecoLogicStudio is an innovative architecture and design firm that specializes in developing
        biotechnology for the built environment. Co-founded by Claudia Pasquero and Marco Poletto in
        London in 2005, the studio has gained international recognition for its projects that
        integrate systemic thinking, computational design, biotechnology, and digital prototyping.{' '}
        <br /> The studio's approach to design encompasses a wide range of scales, from micro to
        global, and treats each project as a laboratory for testing future models of urban
        inhabitation. Their focus is on creating scalable nature-based solutions to address the
        challenges faced by contemporary cities in achieving carbon neutrality and mitigating
        climate change effects.
      </Typography>
    </Box>
  );
};

export default FullInfo;
