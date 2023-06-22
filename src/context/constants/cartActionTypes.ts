export type ActionType = 'LOADING' | 'LOAD_SUCCESS' | 'LOAD_ERROR';
export type CartActionType =
  | 'CART_UPDATE'
  | 'CART_ADD'
  | 'CART_DELETE'
  | 'CART_RESET';

export interface IAction<T, K> {
  payload?: Array<T>;
  type: K;
}
