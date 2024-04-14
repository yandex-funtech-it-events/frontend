import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

type TextRunnerCircleProps = {
  text: string;
  duration?: number;
  onClick?: () => void;
};
const TextRunnerCircle = ({ text, duration = 15, onClick }: TextRunnerCircleProps) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const letters = text.split('');
      const styledText = letters
        .map(
          (letter, index) =>
            `<span style='position: absolute; transform: rotate(${index * 20}deg); transform-origin: 0 160px; color: #FF4D00; font-size: 40px; font-weight: 800;'>${letter}</span>`
        )
        .join('');
      textRef.current.innerHTML = styledText;
    }
  }, [text]);

  return (
    <Box
      onClick={onClick}
      borderRadius="50%"
      sx={{
        margin: '0 auto',
        width: 'fit-content',
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <Typography
        ref={textRef}
        variant="body1"
        sx={{
          height: '320px',
          animation: `rotate ${duration}s linear infinite`,
        }}
      >
        {text}
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        sx={{
          position: 'absolute',
        }}
      >
        <svg
          width="133"
          height="55"
          viewBox="0 0 133 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-0.350586"
            y="14.791"
            width="130"
            height="40"
            rx="4"
            transform="rotate(-6.31137 -0.350586 14.791)"
            fill="#FF6E2C"
          />
          <path
            d="M122.572 13.6093C121.615 12.7213 120.188 12.2773 118.292 12.2773L116.531 12.2773V16.0641H116.91C117.543 16.0641 118.03 16.2295 118.373 16.5603C118.698 16.8737 118.861 17.3351 118.861 17.9445V21.2873C118.861 22.1578 118.987 22.8282 119.24 23.2982C119.493 23.7857 119.89 24.1339 120.432 24.3429C120.576 24.4004 120.733 24.4526 120.902 24.4996C120.733 24.5465 120.576 24.5988 120.432 24.6563C119.89 24.8652 119.493 25.2047 119.24 25.6748C118.987 26.1623 118.861 26.8413 118.861 27.7118V31.0546C118.861 31.664 118.698 32.1254 118.373 32.4388C118.03 32.7696 117.543 32.935 116.91 32.935H116.531V36.7218H118.292C120.188 36.7218 121.615 36.2778 122.572 35.3899C123.529 34.5019 124.008 33.2484 124.008 31.6292V27.5812C124.008 27.1982 124.116 26.9022 124.333 26.6933C124.55 26.5018 124.83 26.406 125.173 26.406H126.094V22.5931H125.173C124.83 22.5931 124.55 22.4974 124.333 22.3058C124.116 22.1143 124.008 21.8183 124.008 21.4179V17.3699C124.008 15.7508 123.529 14.4972 122.572 13.6093Z"
            fill="white"
          />
          <path
            d="M11.6734 36.7218C9.77711 36.7218 8.35039 36.2778 7.39323 35.3899C6.43606 34.5019 5.95748 33.2484 5.95748 31.6292V27.5812C5.95748 27.1808 5.84912 26.8848 5.6324 26.6933C5.41569 26.5018 5.13576 26.406 4.79263 26.406H3.87158L3.87158 22.5931H4.79263C5.13576 22.5931 5.41569 22.4974 5.6324 22.3058C5.84912 22.0969 5.95748 21.8009 5.95748 21.4179L5.95748 17.3699C5.95748 15.7508 6.43606 14.4972 7.39323 13.6093C8.35039 12.7213 9.77711 12.2773 11.6734 12.2773L13.4342 12.2773V16.0641H13.0549C12.4229 16.0641 11.9352 16.2295 11.5921 16.5603C11.267 16.8737 11.1045 17.3351 11.1045 17.9445V21.2873C11.1045 22.1578 10.9781 22.8369 10.7252 23.3244C10.4724 23.7944 10.0751 24.1339 9.5333 24.3429C9.38914 24.4004 9.23267 24.4526 9.06388 24.4996C9.23267 24.5465 9.38914 24.5988 9.5333 24.6563C10.0751 24.8652 10.4724 25.2134 10.7252 25.7009C10.9781 26.171 11.1045 26.8413 11.1045 27.7118V31.0546C11.1045 31.664 11.267 32.1254 11.5921 32.4388C11.9352 32.7696 12.4229 32.935 13.0549 32.935H13.4342L13.4342 36.7218H11.6734Z"
            fill="white"
          />
          <path
            d="M17.6178 31.7218V16.1662L21.5146 16.1662L27.4052 25.1536L33.1332 16.1662H37.03L37.0778 31.7218H32.7268L32.6848 23.4685L28.3758 30.1885H26.272L21.9927 23.6994L21.9927 31.7218L17.6178 31.7218Z"
            fill="white"
          />
          <path
            d="M73.2138 30.7885C74.1382 31.544 75.4292 31.9218 77.0867 31.9218C77.6923 31.9218 78.274 31.8625 78.8319 31.744C79.3897 31.6403 79.8599 31.4699 80.2424 31.2329L79.1188 28.2773C78.7362 28.5292 78.274 28.6551 77.7322 28.6551C77.3337 28.6551 77.007 28.5366 76.752 28.2996C76.497 28.0477 76.3695 27.707 76.3695 27.2773V23.2773H79.3339V20.1218H76.3695V16.9885H71.8273V20.1218H69.9386V23.2773H71.8273V27.3218C71.8273 28.8625 72.2894 30.0181 73.2138 30.7885Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M106.973 31.9218C105.874 31.9218 104.933 31.6996 104.152 31.2551C103.865 31.0858 103.602 30.8863 103.364 30.6566V36.0329H98.8213V19.6773H103.148V20.879C103.413 20.587 103.716 20.342 104.057 20.144C104.838 19.6996 105.81 19.4773 106.973 19.4773C108.153 19.4773 109.221 19.7366 110.177 20.2551C111.149 20.7588 111.914 21.4773 112.472 22.4107C113.046 23.3292 113.333 24.4255 113.333 25.6996C113.333 26.9736 113.046 28.0773 112.472 29.0107C111.914 29.944 111.149 30.6625 110.177 31.1662C109.221 31.6699 108.153 31.9218 106.973 31.9218ZM106.017 28.5662C106.527 28.5662 106.981 28.4551 107.38 28.2329C107.794 28.0107 108.121 27.6848 108.36 27.2551C108.615 26.8255 108.743 26.307 108.743 25.6996C108.743 25.0922 108.615 24.5736 108.36 24.144C108.121 23.7144 107.794 23.3885 107.38 23.1662C106.981 22.944 106.527 22.8329 106.017 22.8329C105.507 22.8329 105.045 22.944 104.631 23.1662C104.232 23.3885 103.905 23.7144 103.65 24.144C103.411 24.5736 103.292 25.0922 103.292 25.6996C103.292 26.307 103.411 26.8255 103.65 27.2551C103.905 27.6848 104.232 28.0107 104.631 28.2329C105.045 28.4551 105.507 28.5662 106.017 28.5662Z"
            fill="white"
          />
          <path
            d="M87.582 31.9218C86.5302 31.9218 85.5819 31.7292 84.7372 31.344C83.9084 30.9588 83.255 30.3588 82.7768 29.544C82.3146 28.7144 82.0835 27.6699 82.0835 26.4107V19.6773L86.6258 19.6773V25.7218C86.6258 26.6551 86.8091 27.3218 87.1756 27.7218C87.5581 28.1218 88.092 28.3218 88.7774 28.3218C89.2236 28.3218 89.63 28.2255 89.9966 28.0329C90.3632 27.8403 90.658 27.5366 90.8811 27.1218C91.1043 26.6922 91.2158 26.144 91.2158 25.4773V19.6773H95.7581V31.7218H91.431V30.4624C91.1124 30.7876 90.7458 31.0592 90.3313 31.2773C89.4866 31.707 88.5702 31.9218 87.582 31.9218Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.6148 31.9218C61.0848 31.9218 59.746 31.6551 58.5985 31.1218C57.467 30.5736 56.5824 29.8329 55.9449 28.8996C55.3233 27.9514 55.0125 26.8773 55.0125 25.6773C55.0125 24.4773 55.3154 23.4107 55.921 22.4773C56.5426 21.5292 57.3952 20.7959 58.479 20.2773C59.5628 19.744 60.782 19.4773 62.1367 19.4773C63.4117 19.4773 64.5752 19.7218 65.6271 20.2107C66.6789 20.6848 67.5157 21.3885 68.1372 22.3218C68.7588 23.2551 69.0696 24.3885 69.0696 25.7218C69.0696 25.8699 69.0616 26.0403 69.0457 26.2329C69.0298 26.4255 69.0138 26.6033 68.9979 26.7662H59.5833C59.6458 26.9813 59.7319 27.1813 59.8417 27.3662C60.1126 27.7959 60.4951 28.1292 60.9892 28.3662C61.4833 28.5885 62.0729 28.6996 62.7583 28.6996C63.3958 28.6996 63.9377 28.6181 64.3839 28.4551C64.8461 28.2773 65.3003 28.0107 65.7466 27.6551L68.1372 29.9662C67.5157 30.6033 66.7507 31.0922 65.8422 31.4329C64.9338 31.7588 63.858 31.9218 62.6148 31.9218ZM59.7939 23.7662C59.6634 24.0002 59.571 24.2594 59.5169 24.544H64.82C64.7683 24.2507 64.6708 23.984 64.5274 23.744C64.3042 23.344 63.9855 23.0329 63.5711 22.8107C63.1726 22.5885 62.7025 22.4773 62.1606 22.4773C61.6187 22.4773 61.1406 22.5885 60.7262 22.8107C60.3278 23.0329 60.017 23.3514 59.7939 23.7662Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.1226 31.1218C44.2701 31.6551 45.6089 31.9218 47.1389 31.9218C48.382 31.9218 49.4578 31.7588 50.3663 31.4329C51.2747 31.0922 52.0397 30.6033 52.6613 29.9662L50.2706 27.6551C49.8244 28.0107 49.3702 28.2773 48.908 28.4551C48.4617 28.6181 47.9198 28.6996 47.2823 28.6996C46.597 28.6996 46.0073 28.5885 45.5132 28.3662C45.0192 28.1292 44.6367 27.7959 44.3657 27.3662C44.256 27.1813 44.1698 26.9813 44.1073 26.7662H53.5219C53.5379 26.6033 53.5538 26.4255 53.5698 26.2329C53.5857 26.0403 53.5937 25.8699 53.5937 25.7218C53.5937 24.3885 53.2829 23.2551 52.6613 22.3218C52.0397 21.3885 51.203 20.6848 50.1511 20.2107C49.0992 19.7218 47.9358 19.4773 46.6608 19.4773C45.306 19.4773 44.0868 19.744 43.0031 20.2773C41.9193 20.7959 41.0666 21.5292 40.445 22.4773C39.8394 23.4107 39.5366 24.4773 39.5366 25.6773C39.5366 26.8773 39.8474 27.9514 40.469 28.8996C41.1065 29.8329 41.991 30.5736 43.1226 31.1218ZM44.0409 24.544C44.0951 24.2594 44.1874 24.0002 44.3179 23.7662C44.541 23.3514 44.8518 23.0329 45.2503 22.8107C45.6646 22.5885 46.1428 22.4773 46.6847 22.4773C47.2265 22.4773 47.6967 22.5885 48.0951 22.8107C48.5095 23.0329 48.8283 23.344 49.0514 23.744C49.1948 23.984 49.2924 24.2507 49.344 24.544H44.0409Z"
            fill="white"
          />
        </svg>
        <Typography
          variant="body2"
          sx={{
            width: '140px',
            textAlign: 'center',
            color: '#141216',
          }}
        >
          подобрать случайное событие{' '}
        </Typography>
      </Box>
    </Box>
  );
};

export default TextRunnerCircle;
