import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./auth.model";
import { login, logout } from "./auth.actions";

export const authReducer = createReducer(
  initialAuthState,

  on(login, (state, {username}) => {
    return  {
      ...state,
      isAuthenticated : true,
      username : username
    }
  }),

  on(logout, (state) => {
    return initialAuthState;
  })
)
