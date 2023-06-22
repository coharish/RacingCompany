import http, { ApiResponse } from '../../adapters/http';
import { IAction } from '../constants/cartActionTypes';

export default (() => (dispatch: React.Dispatch<IAction<any, any>>) => {
  dispatch({
    type: 'LOADING'
  });
  // API call to fetch data and dispatch actions
})();
