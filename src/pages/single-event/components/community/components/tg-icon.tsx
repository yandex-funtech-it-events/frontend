import { Link } from '@mui/material';
import telegram from '../../../../../assets/icons/telegram.svg';

const TelegramIcon: React.FC = () => {
  return (
    <Link href="/">
      <img src={telegram} alt="Telegram logo" />
    </Link>
  );
};

export default TelegramIcon;
