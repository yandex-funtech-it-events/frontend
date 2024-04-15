import { Link, Typography } from '@mui/material';

const TitleLink: React.FC = () => {
  return (
    <Link
      href="#info"
      component="a"
      sx={{
        textDecoration: 'none',
        color: '#2196F3',
        '&:hover': {
          opacity: 0.5,
        },
        transition: 'opacity 0.3s',
      }}
    >
      <Typography component="p" variant="body1">
        Саммит Кибербезопасности 2023
      </Typography>
    </Link>
  );
};

export default TitleLink;
