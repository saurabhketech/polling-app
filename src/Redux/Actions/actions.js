import { createAction } from 'redux-actions';
import * as constant from "../constant"
export const RegisterSuccess = createAction(constant.REGISTER_SUCCESS);
export const RegisterRequest = createAction(constant.REGISTER_REQUEST);
export const RegisterError = createAction(constant.REGISTER_ERROR);


// Login

export const LoginSuccess = createAction(constant.LOGIN_SUCCESS);
export const LoginRequest = createAction(constant.LOGIN_REQUEST);
export const LoginError = createAction(constant.LOGIN_ERROR);

// get pols
export const GetPolsSuccess = createAction(constant.GET_POLS_SUCCESS);
export const GetPolsError = createAction(constant.GET_POLS_ERROR);
export const GetPolsRequest = createAction(constant.GET_POLS_REQUEST);

// update pol
export const UpdatePolsSuccess = createAction(constant.UPDATE_POLS_TITLE_SUCCESS);
export const UpdatePolsError = createAction(constant.UPDATE_POLS_TITLE_ERROR);
export const UpdatePolsRequest = createAction(constant.UPDATE_POLS_TITLE_REQUEST);
