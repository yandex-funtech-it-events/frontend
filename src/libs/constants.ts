import TicketIcon from '../components/icons/ticket-icons.tsx';
import ExitIcon from '../components/icons/exit-icons.tsx';
import SettingsIcon from '../components/icons/settings-icons.tsx';
import BellIcon from '../components/icons/bell-icon.tsx';
import FolderIcon from '../components/icons/folder-icons.tsx';
import ChatIcon from '../components/icons/chat-icons.tsx';

export const posterImages = [
  {
    img: '/poster.png',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '/poster.png',
    title: 'Burger',
  },
  {
    img: '/poster.png',
    title: 'Camera',
  },
  {
    img: '/poster.png',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: '/poster.png',
    title: 'Hats',
  },
  {
    img: '/poster.png',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: '/poster.png',
    title: 'Basketball',
  },
  {
    img: '/poster.png',
    title: 'Fern',
  },
];

export const menuLinkMock = [
  {
    label: 'Мои события',
    href: '/my-events',
    icon: TicketIcon,
  },
  {
    label: 'Общение',
    href: '/chats',
    icon: ChatIcon,
  },
  {
    label: 'Материалы',
    href: '/folders',
    icon: FolderIcon,
  },
  {
    label: 'Уведомления',
    href: '/notification',
    icon: BellIcon,
  },
  {
    label: 'настройка профиля',
    href: '/settings',
    icon: SettingsIcon,
  },
  {
    label: 'Выйти',
    href: '/',
    icon: ExitIcon,
  },
];
