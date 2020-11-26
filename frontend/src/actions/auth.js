export const authLogin = (payload) => {
  localStorage.setItem('auth', JSON.stringify(payload));
  return {
    type: 'AUTH_LOGIN',
    payload,
  };
};
export const authLogout = () => {
  localStorage.removeItem('auth');
  return {
    type: 'AUTH_LOGOUT',
  };
};
