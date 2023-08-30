// store/reducers.js
import { combineReducers } from 'redux';
import { SET_USER, LOGOUT_USER } from './actions';

const initialState = {
  user: null,
};

function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;