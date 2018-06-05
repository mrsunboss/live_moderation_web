import { handleActions } from 'redux-actions';
const initialState ={
  last_hour_list: [],
  current: {},
  data: {
    url: '',
    data: {
      
    }
  },
  fileStream:''

};
export default handleActions({
  'fetch last_hour_list'(state, action) {
    let a = action.payload.data.last_hour_list.filter(d => d.live_id)
    let b = action.payload.data.hour_list_1.filter(d => d.live_id)
    let c = action.payload.data.hour_list_2.filter(d => d.live_id)
    let final = a.concat(b)
    final = final.concat(c)
    return {
      ...state,
      last_hour_list:final
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
      data: action.payload,
      fileStream:action.payload.fileStream
    }
  },
  'init data' (state) {
    return {
      ...state,
      data: initialState.data,
      current: initialState.current,
      fileStream:initialState.fileStream
    }
  }

}, initialState);
