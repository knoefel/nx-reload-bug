import React, { createContext, FC, useContext, useState } from 'react';

export const DialogStateContext = createContext<DialogState | undefined>(
  undefined
);

interface DialogState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const DialogStateProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogStateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogStateContext.Provider>
  );
};

