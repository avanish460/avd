import { combineReducers } from "redux";

const fetchUserReducer = (state = [], action) => {
  if (action.type === "FETCH_USER") {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  user: fetchUserReducer,
});
