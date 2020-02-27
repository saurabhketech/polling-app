import * as constant from "../../constant"


const initialState = {
  isLogin: false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case constant.LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLogin: true, response: action.payload.response };
    case constant.LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case constant.LOGIN_ERROR:
      return { ...state, isError: true, isLoading: false, error: action.payload.error };

    default:
      return state;
  }
}