import { createAction, props } from "@ngrx/store";

const STORE_USER_DATA = '[common action] store user data';
const GET_USER_DATA = '[common effects] get user data';
const ERROR_DATA = '[common effects] get error data';

const SHOW_SKILL_MODAL = '[common action] show skill modal';


export const Store_User_data = createAction(
    STORE_USER_DATA
)

export const Get_User_data = createAction(
    GET_USER_DATA,
    props<{ userData: any }>()
)

export const show_skill_modal = createAction(
    SHOW_SKILL_MODAL,
    props<{ isShowing: boolean }>()
)

export const failed_data = createAction(
    ERROR_DATA,
    props<{ error: any }>()
)