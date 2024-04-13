import TicketIcon from '../components/icons/ticket-icons.tsx';
import ExitIcon from '../components/icons/exit-icons.tsx';
import SettingsIcon from '../components/icons/settings-icons.tsx';
import BellIcon from '../components/icons/bell-icon.tsx';
import FolderIcon from '../components/icons/folder-icons.tsx';
import ChatIcon from '../components/icons/chat-icons.tsx';
import { FilterDirectionType } from '../types';

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
    href: '/profile',
    icon: TicketIcon,
  },
  {
    label: 'Общение',
    href: 'chats',
    icon: ChatIcon,
  },
  {
    label: 'Материалы',
    href: 'materials',
    icon: FolderIcon,
  },
  {
    label: 'настройка профиля',
    href: 'settings',
    icon: SettingsIcon,
  },
  {
    label: 'Выйти',
    href: '/',
    icon: ExitIcon,
  },
];

export const filtersDirectionsMock: FilterDirectionType = {
  Все: {
    directions: [],
  },
  Менеджмент: {
    directions: ['Менеджмент1', 'Менеджмент2', 'Менеджмент3'],
  },
  Бизнес: {
    directions: ['Бизнес1', 'Бизнес2', 'Бизнес3'],
  },
  Маркетинг: {
    directions: ['Маркетинг1', 'Маркетинг2', 'Маркетинг3'],
  },
  Документирование: {
    directions: ['Документирование1', 'Документирование2', 'Документирование3'],
  },
  Сервисы: {
    directions: ['Сервисы1', 'Сервисы2', 'Сервисы3'],
  },
  Другие: {
    directions: [],
  },
};

export const filtersStatusMock = [
  {
    label: 'Любые',
  },
  {
    label: 'Онлайн',
  },
  {
    label: 'Офлайн',
  },
];

export const citiesMock = ['Москва', 'Санкт-Петербург', 'Воронеж', 'Минск', 'Другой город'];
