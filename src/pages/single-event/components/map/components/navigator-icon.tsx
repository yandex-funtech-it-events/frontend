import { Link } from '@mui/material';
import nav from '../../../../../assets/icons/navigation.svg';

const NavigatorLogo: React.FC = () => {
  return (
    <Link href="/">
      <img src={nav} alt="Navigator logo" />
    </Link>
  );
};

export default NavigatorLogo;
