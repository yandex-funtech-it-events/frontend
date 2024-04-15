// import React from 'react';
// import { Box, Typography, Tabs, Tab, Container } from '@mui/material';
// import CustomTabPanel from './components/custom-tab-panel';
// import CustomTabCard1 from './components/custom-tab-card1';
// import CustomTabCard2 from './components/custom-tab-card2';

// import { mockDataProgram } from '../../../../libs/constants';

// const EventProgram: React.FC = () => {
//   const [value, setValue] = React.useState(0);

//   const a11yProps = (index: number) => {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
//   };

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Container sx={{ background: '#F4F1ED' }}>
//       <Box id='program'
//         component="section"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         mb={20}
//         pt={4}
//         pb={8}
//         sx={{ background: '#F4F1ED' }}
//       >
//         <Typography component="h2" variant="h3" mb={5} alignSelf="start">
//           Программа
//         </Typography>

//         <Box display="flex" flexDirection="column" alignItems="center">
//           <Box>
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               aria-label="basic tabs"
//               sx={{ marginBottom: '28px' }}
//             >
//               <Tab sx={{ width: '222px' }} label="Суббота" {...a11yProps(0)} />
//               <Tab sx={{ width: '222px' }} label="Воскресенье" {...a11yProps(1)} />
//             </Tabs>
//           </Box>

//           <CustomTabPanel value={value} index={0}>
//             {mockDataProgram.map((card, i) =>
//               mockDataProgram.data.length > 0 ? (
//                 <CustomTabCard1
//                   key={i}
//                   time={card.time}
//                   date={card.date}
//                   description={card.description}
//                   eventName={card.eventName}
//                   data={card.data}
//                 />
//               ) : (
//                 <CustomTabCard2
//                   key={i}
//                   time={card.time}
//                   date={card.date}
//                   description={card.description}
//                   eventName={card.eventName}
//                 />
//               )
//             )}
//           </CustomTabPanel>

//           <CustomTabPanel value={value} index={1}>
//             {mockDataProgram.map((card, i) => (
//               <CustomTabCard2
//                 key={i}
//                 time={card.time}
//                 date={card.date}
//                 description={card.description}
//                 eventName={card.eventName}
//               />
//             ))}
//           </CustomTabPanel>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default EventProgram;
