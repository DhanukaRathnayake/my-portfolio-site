import {
  Email,
  UserDispatchTypes,
  SEND_EMAIL_LOADING,
  SEND_EMAIL_FAIL,
  SEND_EMAIL_SUCCESS,
} from "../../types/UserActionTypes";

const initialState: Email = {
  loading: false,
};

const userReducer = (
  state: Email = initialState,
  action: UserDispatchTypes
): Email => {
  switch (action.type) {
    case SEND_EMAIL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEND_EMAIL_FAIL:
      return {
        ...state,
        loading: false,
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
