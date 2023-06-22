import { Cart, CartItem } from '../../partials/models/cart';
import { IAction, CartActionType } from '../constants/cartActionTypes';

export interface State {
  cart: {
    loading: boolean;
    error: any;
    data: Array<CartItem>;
  };
}
export const initialState: State = {
  cart: {
    loading: false,
    error: null,
    data: []
  }
};

const cartReducer = (
  state = initialState,
  { payload, type }: IAction<CartItem, CartActionType>
): State => {
  switch (type) {
    case 'CART_ADD': {
      return {
        ...state
        // update the state
      };
    }

    case 'CART_UPDATE': {
      return {
        ...state
        // update the state
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
