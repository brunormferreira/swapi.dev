/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useReducer, useContext } from 'react';
import reducer from './reducer';

const ModalContext = createContext({} as any);

const initialState = {
  isVisible: false,
};

export const ModalContextProvider = (props: any): any => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <ModalContext.Provider value={value} {...props} />;
};

export const useModal = (): any => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalContext');
  }
  return context;
};
