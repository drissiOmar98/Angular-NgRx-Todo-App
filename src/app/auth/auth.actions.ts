import { createAction, props } from "@ngrx/store";

/**
 * Login action with username
 */
export const login = createAction(
  '[Auth] Login',
  props<{username : string}>()
);


/**
 * Logout action
 */
export const logout = createAction(
  '[Auth] logout'
)
