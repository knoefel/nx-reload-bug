import i18n, { i18n as i18nType } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { pipe, prop, toUpper } from 'ramda';
import { Language } from '../models/language';

const translationsJson = {
  en: { translation: {} },
  de: { translation: {} },
};

export const translations = {} as any;

/*
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still have the intellisense support
 * along with type-safety
 */
const convertLanguageJsonToObject = (obj: any, dict: any, current?: string) => {
  Object.keys(obj).forEach((key) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === 'object') {
      dict[key] = {};
      convertLanguageJsonToObject(obj[key], dict[key], currentLookupKey);
    } else {
      dict[key] = currentLookupKey;
    }
  });
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      resources: translationsJson,
      lng: 'de',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    () => {
      convertLanguageJsonToObject({}, translations);
    }
  );

const getUpperCaseLanguageCode = pipe<i18nType, string, Language>(
  prop('language'),
  toUpper
);

export { i18n as i18nInit, getUpperCaseLanguageCode };
