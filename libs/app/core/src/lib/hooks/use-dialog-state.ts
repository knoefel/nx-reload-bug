import { useContext } from 'react';
import { DialogStateContext } from '../providers/dialog-provider';

export const useDialogState = () => {
  const context = useContext(DialogStateContext);

  if (!context) {
    throw new Error('useDialogState must be used within a DialogStateProvider');
  }

  return context;
};
