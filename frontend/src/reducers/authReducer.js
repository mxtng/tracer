const initialState = {
  isAuth: false,
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'AUTH_LOGIN':
      return {
        ...state,
        isAuth: payload.token && true,
        currentUser: payload,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        isAuth: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
