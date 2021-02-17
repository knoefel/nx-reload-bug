import React, {
  createContext,
  Dispatch,
  FC,
  useContext,
  useReducer,
} from 'react';
import { SnackbarActionType, SnackbarType } from '../../models/snackbar';

const SnackbarStateContext = createContext<SnackbarState | undefined>(
  undefined
);
const SnackbarDispatchContext = createContext<SnackbarDispatch | undefined>(
  undefined
);


interface SnackbarAction {
  type: SnackbarActionType;
  payload?: SnackbarActionPayload;
}

type SnackbarDispatch = Dispatch<SnackbarAction>;

interface SnackbarActionPayload {
  message: string;
  type?: SnackbarType;
}

interface SnackbarState {
  message: string | null;
  type: SnackbarType;
  autoHideDuration: number;
}

const initialSnackbarState: SnackbarState = {
  message: null,
  type: SnackbarType.SUCCESS,
  autoHideDuration: 5000,
};

const snackbarReducer = (
  state: SnackbarState,
  action: SnackbarAction
): SnackbarState => {
  switch (action.type) {
    case SnackbarActionType.SHOW_MESSAGE:
      return { ...state, ...action.payload };
    case SnackbarActionType.CLEAR:
      return { ...initialSnackbarState };
    default:
      return state;
  }
};

export const SnackbarProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialSnackbarState);

  return (
    <SnackbarStateContext.Provider value={state}>
      <SnackbarDispatchContext.Provider value={dispatch}>
        {children}
      </SnackbarDispatchContext.Provider>
    </SnackbarStateContext.Provider>
  );
};

export const useSnackbarDispatch = () => {
  const context = useContext(SnackbarDispatchContext);

  if (!context) {
    throw new Error(
      'useSnackbarDispatch must be used within a SnackbarProvider'
    );
  }

  return context;
};

export const useSnackbarState = () => {
  const context = useContext(SnackbarStateContext);

  if (!context) {
    throw new Error(
      'useSnackbarState must be used within a DialogStateProvider'
    );
  }

  return context;
};
