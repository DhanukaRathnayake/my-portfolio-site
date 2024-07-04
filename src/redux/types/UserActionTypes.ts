export const SEND_EMAIL_LOADING = "SEND_EMAIL_LOADING";
export const SEND_EMAIL_FAIL = "SEND_EMAIL_FAIL";
export const SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS";

export interface Email {
  loading?: boolean;
}

// SEND_EMAIL
export interface SendEmailLoading {
  type: typeof SEND_EMAIL_LOADING;
}

export interface SendEmailFail {
  type: typeof SEND_EMAIL_FAIL;
}

export interface SendEmailSuccess {
  type: typeof SEND_EMAIL_SUCCESS;
}
// SEND_EMAIL

export type UserDispatchTypes =
  | SendEmailLoading
  | SendEmailFail
  | SendEmailSuccess;
