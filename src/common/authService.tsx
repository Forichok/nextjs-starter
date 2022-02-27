export type SessionData = {
  accessToken: string | null;
  refreshToken: string | null;
  userCredId: string | null;
};

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_CRED_ID_KEY = 'userCredId';

export const saveSession = (session: SessionData) => {
  session.accessToken &&
    localStorage.setItem(ACCESS_TOKEN_KEY, session.accessToken);
  session.refreshToken &&
    localStorage.setItem(REFRESH_TOKEN_KEY, session.refreshToken);
  session.userCredId &&
    localStorage.setItem(USER_CRED_ID_KEY, session.userCredId);
};

export const getSession = (): SessionData => {
  return {
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
    refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
    userCredId: localStorage.getItem(USER_CRED_ID_KEY),
  };
};

export const clearSession = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_CRED_ID_KEY);
};
