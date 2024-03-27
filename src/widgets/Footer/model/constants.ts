import {
  CART_ROUTE,
  CONTACT_ROUTE,
  FAVORITE_ROUTE,
  TERMS_ROUTE,
} from '~/shared/config';

import { FooterSocial } from './types';

/** Links of the first column of the menu in the footer */
export const FIRST_FOOTER_MENU = [
  { label: 'Избранное', link: FAVORITE_ROUTE },
  { label: 'Корзина', link: CART_ROUTE },
  { label: 'Контакты', link: CONTACT_ROUTE },
];

/** Links of the second column of the menu in the footer */
export const SECOND_FOOTER_MENU = [
  { label: 'Условия сервиса', link: TERMS_ROUTE },
];

/** Links to social media menu columns in the footer */
export const FOOTER_SOCIAL_LINK: FooterSocial[] = [
  {
    label: 'VK',
    icon: 'vk-filled',
    link: 'https://vk.com/',
  },
  {
    label: 'Telegram',
    icon: 'telegram-filled',
    link: 'https://telegram.org/',
  },
  {
    label: 'Whatsapp',
    icon: 'whatsapp-filled',
    link: 'https://www.whatsapp.com/',
  },
];

/** Available languages in the footer */
export const FOOTER_LANGUAGES = [
  { value: 'ru', label: 'Рус' },
  { value: 'eng', label: 'Eng' },
];
