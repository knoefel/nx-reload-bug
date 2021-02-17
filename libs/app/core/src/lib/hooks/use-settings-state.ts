import { useContext } from 'react';
import { SettingsStateContext } from '../providers/settings-provider';

export const useSettingsState = () => {
  const context = useContext(SettingsStateContext);

  if (!context) {
    throw new Error('useSettingsState must be used within a SettingsProvider');
  }

  return context;
};
