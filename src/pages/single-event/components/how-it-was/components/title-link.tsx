import { Link, Typography } from '@mui/material';

const TitleLink: React.FC = () => {
  return (
    <Link href="/" sx={{ textDecoration: 'none' }}>
      <Typography component="p" variant="body1">
        Саммит Кибербезопасности 2023
      </Typography>
    </Link>
  );
};

export default TitleLink;
