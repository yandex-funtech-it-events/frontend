import * as React from 'react';
import { styled, SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
  name: 'FolderIcon',
  shouldForwardProp: (prop) => prop !== 'fill',
})<SvgIconProps>(() => ({
  fill: 'none',
}));

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
  focusable: 'false',
  'aria-hidden': 'true',
};

const FolderIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        id="icon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.04917 5.07582L8.59835 5.625H9.375H15.625C16.6605 5.625 17.5 6.46446 17.5 7.5V13.75C17.5 14.7855 16.6605 15.625 15.625 15.625H4.375C3.33947 15.625 2.5 14.7855 2.5 13.75V5.625C2.5 4.58947 3.33947 3.75 4.375 3.75H5.9467C6.44398 3.75 6.92089 3.94754 7.27252 4.29917L8.04917 5.07582ZM0.625 5.625C0.625 3.55393 2.30393 1.875 4.375 1.875H5.9467C6.94126 1.875 7.89509 2.27009 8.59835 2.97335L9.375 3.75H15.625C17.6961 3.75 19.375 5.42893 19.375 7.5V13.75C19.375 15.8211 17.6961 17.5 15.625 17.5H4.375C2.30393 17.5 0.625 15.8211 0.625 13.75V5.625ZM5.9375 8.125C5.41973 8.125 5 8.54473 5 9.0625C5 9.58027 5.41973 10 5.9375 10H14.0625C14.5803 10 15 9.58027 15 9.0625C15 8.54473 14.5803 8.125 14.0625 8.125H5.9375Z"
        fill="#9E9E9E"
      />
    </SvgIcon>
  );
};

export default FolderIcon;
