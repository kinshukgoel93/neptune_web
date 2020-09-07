import { USER_LOGIN, USER_LOGIN_SUCCESSFULL } from "../../Utils/valuetypes";

const INITIAL_STATE = {
  user: {},
  user_login_succesfull : false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };
    case USER_LOGIN_SUCCESSFULL:
      return {...state,user_login_succesfull : action.payload}
    default:
      return state;
  }
};
