import SignupReducer from "./cmp/Signup/Signup.reducer";
import LoginReducer from "./cmp/Login/Login.reducer";
import ForgotReducer from "./cmp/Forgot/Forgot.reducer";
import RevenueReducer from "./cmp/Admin/Dashboard/Modern/RevenueUpdates/Revenue.reducer";
import { legacy_createStore as createStore } from "redux";
import{applyMiddleware, combineReducers} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
const middlewares = applyMiddleware(
  logger,
  thunk
);
const root = combineReducers({
  SignupReducer,
  LoginReducer,
  ForgotReducer,
  RevenueReducer
});
const storage = createStore(root,{},middlewares);
export default storage;
