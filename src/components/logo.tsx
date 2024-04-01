import { Link } from '@mui/material';
import logo from '@/assets/icons/Logo.svg';

const Logo = () => {
  return (
    <Link href="/">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
