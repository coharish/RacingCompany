import React, { createContext, useReducer } from 'react';

import cartReducer, { State, initialState } from './reducers/cartReducer';
import { CartActionType, IAction } from './constants/cartActionTypes';
import { CartItem } from '../partials/models/cart';

export type GlobalContextType = {
  cartState: State;
  cartDispatch: React.Dispatch<IAction<CartItem, CartActionType>>;
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({
  children
}: {
  children: React.ReactElement;
}) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        cartState,
        cartDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
