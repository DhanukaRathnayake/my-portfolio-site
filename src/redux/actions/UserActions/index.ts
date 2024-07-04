import { Dispatch } from "redux";
import {
  UserDispatchTypes,
  SEND_EMAIL_LOADING,
  SEND_EMAIL_FAIL,
  SEND_EMAIL_SUCCESS,
} from "../../types/UserActionTypes";
import axios from "axios";

export const SendEmail =
  (name: string, email: string, message: string) =>
  async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({
        type: SEND_EMAIL_LOADING,
      });

      // Make a request to the email sending API route
      const response = await axios.post("/api/sendEmail", {
        name,
        email,
        message,
      });

      dispatch({
        type: SEND_EMAIL_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: SEND_EMAIL_FAIL,
      });
    }
  };
