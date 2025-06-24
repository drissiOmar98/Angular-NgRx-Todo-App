/**
 * AuthState - holds authentication information.
 */
export interface AuthState {
  isAuthenticated : boolean;
  username : string | null;
}


/**
 * initialAuthState - default values for auth state.
 */
export const initialAuthState  : AuthState = {
  isAuthenticated : false,
  username  : null
}
