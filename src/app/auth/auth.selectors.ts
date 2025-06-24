import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AuthState} from './auth.model';


/**
 * Feature selector for auth slice of the store
 */
export const selectAuthState = createFeatureSelector<AuthState>('auth');

/**
 * Selector for authentication status
 */
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

/**
 * Selector for current username
 */
export const selectUsername = createSelector(
  selectAuthState,
  (state: AuthState) => state.username
);
