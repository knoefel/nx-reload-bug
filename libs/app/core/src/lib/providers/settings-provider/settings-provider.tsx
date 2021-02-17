import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../../models/language';

export const SettingsStateContext = createContext<SettingsState | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = 'app-settings';

interface Settings {
  darkMode: boolean;
  autoDarkMode: boolean;
  currentLanguage: Language;
}

interface SettingsState {
  settings: Settings;
  updateSettings: Dispatch<SetStateAction<Settings>>;
}

const getInitialSettings = (): Settings => {
  const settings = localStorage.getItem(LOCAL_STORAGE_KEY);

  return settings
    ? JSON.parse(settings)
    : {
        darkMode: false,
        autoDarkMode: true,
        currentLanguage: Language.English,
      };
};

export const SettingsProvider: FC = ({ children }) => {
  const [settings, updateSettings] = useState(getInitialSettings);
  const { i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(settings));
    i18n.changeLanguage(settings.currentLanguage);
  }, [settings, i18n]);

  return (
    <SettingsStateContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsStateContext.Provider>
  );
};

