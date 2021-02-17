import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { de, enUS as en } from 'date-fns/locale';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const DATE_LOCALE = { en, de };

export const DatePickerProvider: FC = ({ children }) => {
  const { i18n } = useTranslation();

  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      locale={DATE_LOCALE[i18n.language]}
    >
      {children}
    </MuiPickersUtilsProvider>
  );
};
