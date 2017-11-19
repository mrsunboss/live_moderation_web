import { handleActions } from 'redux-actions';
const initialState ={
  last_hour_list: [],
  current: {},
  data: {
    url: '',
    data: {
      
    }
  }
};
export default handleActions({
  'fetch last_hour_list' (state, action) {
    return {
      ...state,
      last_hour_list:action.payload.data.last_hour_list
    }
  },
  'set current' (state, action) {
    return {
      ...state,
      current:action.payload
    }
  },
  'fetch enter' (state, action) {
    return {
      ...state,
      data:action.payload
    }
  },
  'init data' (state, action) {
    return {
      ...state,
      data: initialState.data,
      current: initialState.current
    }
  },

}, initialState);
