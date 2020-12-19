import { combineReducers } from "redux";
import  trademarksReducer  from "./trademarksReducer";
import  usersReducer  from "./usersReducer";
 
const rootReducer = combineReducers({
  user: usersReducer,
  trademarks: trademarksReducer
});
 
export default rootReducer;