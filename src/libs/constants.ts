import TicketIcon from '../components/icons/ticket-icons.tsx';
import ExitIcon from '../components/icons/exit-icons.tsx';
import SettingsIcon from '../components/icons/settings-icons.tsx';
import FolderIcon from '../components/icons/folder-icons.tsx';
import ChatIcon from '../components/icons/chat-icons.tsx';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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

export const mockInfoArray = ['28.04.24-29.04.24', 'Нижний Новгород', 'Оффлайн/Онлайн'];

export const mockChipsArray = ['теги', 'теги', 'теги', 'теги', 'теги', 'теги', 'теги'];

export const benefitsMockData = [
  {
    number: '800+',
    description: 'Офлайн участников',
  },
  {
    number: '2000+',
    description: 'Онлайн-участников',
  },
  {
    number: '30',
    description: 'Спикеров',
  },
];

export const mockDataProgram = [
  {
    time: '9.00',
    date: '19 апреля',
    description:
      'Lorem ipsum: Insert Lorem IpsumLorem ipsum: Insert Lorem IpsumLorem ipsum: Insert Lorem IpsumLorem ipsum: Insert Lorem IpsumLorem ipsum: Insert Lorem IpsumLorem ipsum: Insert Lorem Ipsum',
    eventName: 'Вводная часть',
    data: [
      { name: 'Сидоров Петр', profession: 'Бухгалтер' },
      { name: 'Сидоров Алексей', profession: 'Экономист' },
      { name: 'Сидоров Петр', profession: 'Бухгалтер' },
    ],
    img: '/qwerty.jpg',
  },
  {
    time: '12.00',
    eventName: 'Проект КИ в VK',
    date: '19 апреля',
    description: 'Описание 1',
    data: [{ name: 'Сидоров Петр', profession: 'Бухгалтер' }],
    img: '/qwerty.jpg',
  },
  {
    time: '15.30',
    date: '19 апреля',
    eventName: 'Цифровое будущее',
    description: 'Описание 2',
    data: [{ name: 'Сидоров Петр', profession: 'Бухгалтер' }],
    img: '/qwerty.jpg',
  },
];

export const mockDataSpeakers = [
  {
    data: 'Иванов Иван',
    profession: 'Бухгалтер',
  },
  {
    data: 'Сидоров Петр',
    profession: 'Экономист',
  },
  {
    data: 'Сидоров Петр',
    profession: 'Экономист',
  },
  {
    data: 'Иванов Иван',
    profession: 'Бухгалтер',
  },
  {
    data: 'Сидоров Петр',
    profession: 'Экономист',
  },
  {
    data: 'Сидоров Петр',
    profession: 'Экономист',
  },
  {
    data: 'Иванов Иван',
    profession: 'Бухгалтер',
  },
  {
    data: 'Сидоров Петр',
    profession: 'Экономист',
  },
  {
    data: 'Сидоров Петр',
    profession: 'Экономист',
  },
];

export const mockAccordionData = [
  {
    title: 'Нужно ли регистрироваться, чтобы посмотреть трансляцию?',
    description: 'Какое-то описание',
  },
  {
    title: 'Смогу ли я попасть в зал, если мне на почту не пришло приглашение?',
    description: 'Какое-то описание',
  },
  {
    title: 'Могу ли я передать кому-нибудь своё приглашение?',
    description: 'К сожалению, нет — оно именное. Каждую заявку мы рассматриваем индивидуально',
  },
  {
    title: 'Могу ли я передать кому-нибудь своё приглашение?',
    description: 'К сожалению, нет — оно именное. Каждую заявку мы рассматриваем индивидуально',
  },
  {
    title: 'Могу ли я передать кому-нибудь своё приглашение?',
    description: 'К сожалению, нет — оно именное. Каждую заявку мы рассматриваем индивидуально',
  },
  {
    title: 'Могу ли я передать кому-нибудь своё приглашение?',
    description: 'К сожалению, нет — оно именное. Каждую заявку мы рассматриваем индивидуально',
  },
];

export const footerNavArray = [
  { name: 'О мероприятии', href: '#about' },
  { name: 'Спикеры', href: '#speakers' },
  { name: 'Программа', href: '#program' },
  { name: 'Регистрация', href: '#register' },
  { name: 'Карта', href: '#map' },
  { name: 'Сообщества', href: '#community' },
  { name: 'Вопросы', href: '#questions' },
  { name: 'Прошлый раз', href: '#howitwas' },
  { name: 'В начало', href: '#info' },
];

export const menuLinkMock = [
  {
    label: 'Профиль',
    href: '/profile',
    icon: PersonOutlineIcon,
  },
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

export const defaultFilterValues = {
  cities: [],
  directions: [],
  activeDirection: '',
  tags: [],
  format: '',
  isOpenRegister: false,
  search: '',
  date: null,
};
