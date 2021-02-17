import format from 'date-fns/fp/formatWithOptions';
import { de, enUS as en } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

const LOCALE = {
  en,
  de,
};

export function useI18nDate(dateFormat = 'P') {
  const { i18n } = useTranslation();

  return format({ locale: LOCALE[i18n.language] }, dateFormat);
}
