import * as React from 'react';
import { styled, SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
  name: 'ExitIcon',
  shouldForwardProp: (prop) => prop !== 'fill',
})<SvgIconProps>(() => ({
  fill: 'none',
}));

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
  focusable: 'false',
  'aria-hidden': 'true',
};

const ExitIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        id="icon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4754 9.33709C18.8415 9.7032 18.8415 10.2968 18.4754 10.6629L15.3504 13.7879C14.9843 14.154 14.3907 14.154 14.0246 13.7879C13.6585 13.4218 13.6585 12.8282 14.0246 12.4621L15.5492 10.9375L5.9375 10.9375C5.41974 10.9375 5 10.5178 5 10C5 9.48223 5.41974 9.0625 5.9375 9.0625L15.5492 9.0625L14.0246 7.53791C13.6585 7.1718 13.6585 6.5782 14.0246 6.21209C14.3907 5.84597 14.9843 5.84597 15.3504 6.21209L18.4754 9.33709ZM11.875 5.3125C11.875 5.83027 11.4553 6.25 10.9375 6.25C10.4197 6.25 10 5.83027 10 5.3125L10 5C10 3.96447 9.16053 3.125 8.125 3.125L5 3.125C3.96447 3.125 3.125 3.96447 3.125 5L3.125 15C3.125 16.0355 3.96447 16.875 5 16.875L8.125 16.875C9.16053 16.875 10 16.0355 10 15L10 14.6875C10 14.1697 10.4197 13.75 10.9375 13.75C11.4553 13.75 11.875 14.1697 11.875 14.6875L11.875 15C11.875 17.0711 10.1961 18.75 8.125 18.75L5 18.75C2.92893 18.75 1.25 17.0711 1.25 15L1.25 5C1.25 2.92893 2.92894 1.25 5 1.25L8.125 1.25C10.1961 1.25 11.875 2.92893 11.875 5L11.875 5.3125Z"
        fill="#9E9E9E"
      />
    </SvgIcon>
  );
};

export default ExitIcon;
