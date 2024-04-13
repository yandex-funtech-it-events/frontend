import { Link } from '@mui/material';
import taxi from '../../../../../assets/icons/taxi.svg';

const TaxiLogo: React.FC = () => {
  return (
    <Link href="/">
      <img src={taxi} alt="Taxi logo" />
    </Link>
  );
};

export default TaxiLogo;
