import * as React from 'react';
import { styled, SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
  name: 'ChatIcon',
  shouldForwardProp: (prop) => prop !== 'fill',
})<SvgIconProps>(() => ({
  fill: 'none',
}));

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
  focusable: 'false',
  'aria-hidden': 'true',
};

const ChatIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        id="icon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.05402 13.6798L5.81078 16.5986C5.79838 16.7474 5.9158 16.875 6.0651 16.875C6.1276 16.875 6.18793 16.8521 6.23465 16.8105L8.99645 14.3556L9.73317 14.372C9.82156 14.374 9.91051 14.375 10 14.375C12.1185 14.375 13.8585 13.8245 15.0254 12.9033C16.1368 12.026 16.875 10.7043 16.875 8.75C16.875 6.7957 16.1368 5.47403 15.0254 4.59669C13.8585 3.67552 12.1185 3.125 10 3.125C7.88147 3.125 6.1415 3.67552 4.9746 4.59669C3.86324 5.47403 3.125 6.7957 3.125 8.75C3.125 10.8096 3.94491 12.178 5.18438 13.0606L6.05402 13.6798ZM7.48033 18.2119L9.69136 16.2466C9.7938 16.2489 9.89669 16.25 10 16.25C14.8325 16.25 18.75 13.75 18.75 8.75C18.75 3.75 14.8325 1.25 10 1.25C5.16751 1.25 1.25 3.75 1.25 8.75C1.25 11.3963 2.34732 13.3422 4.09684 14.588L3.94226 16.4429C3.83876 17.6848 4.81885 18.75 6.0651 18.75C6.58682 18.75 7.09039 18.5585 7.48033 18.2119Z"
        fill="#9E9E9E"
      />
    </SvgIcon>
  );
};

export default ChatIcon;
