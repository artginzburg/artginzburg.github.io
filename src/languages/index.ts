import { en } from './en';
import { ru } from './ru';

export const languages = { en, ru };

export type LanguageKey = keyof typeof languages;
