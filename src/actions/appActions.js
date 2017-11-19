import { createAction } from 'redux-actions';
import {Host} from './url';
import CookieHelper from '../businessLogic/cookieHelper';
import fetch from 'isomorphic-fetch';
export const setTitle = createAction('set title');
export const setUrl = createAction('set webUrl');
export const setDescription = createAction('set webDescription');
export const setImage = createAction('set webImage');
export const setBreadcrumbsMode = createAction('set breadcrumbsMode');
export const requestGetInfo = () => {
  const token = CookieHelper.Get('token');
  return async (dispatch) => {
    if(token){
      await fetch(`${Host}/account/getinfo`,{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Token: token})
        })
        .then((response)=> {
          return response.json();
        }).then((json)=> {
          if(json.data !== null) {
            dispatch(setUserData(json.data));
            funcs.map(func=>func());
          }else{
             CookieHelper.Set('token',';expires=Thu, 01 Jan 1970 00:00:00 GMT');
          }
          errFuncs.map(func=>func());
        });
    }
  };
};