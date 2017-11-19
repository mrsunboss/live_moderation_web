import { createAction } from 'redux-actions';
import {Host} from './url';
export const fetchLast_hour_list = createAction('fetch last_hour_list');
export const setCurrent = createAction('set current');
export const fetchEnter = createAction('fetch enter');
export const initData = createAction('init data');

export const requestInfo = () => {
  return async (dispatch) => {
    await fetch(`${Host}/lang/live/list`)
      .then((response)=> {
        return response.json();
      }).then((json) => {
      dispatch(fetchLast_hour_list(json));
    });
  };
};

export const requestEnter = (id) => {
  return async (dispatch) => {
    await fetch(`${Host}/lang/live/${id}`)
      .then((response)=> {
        return response.json();
      }).then((json) => {
      dispatch(fetchEnter(json));
    });
  };
};
