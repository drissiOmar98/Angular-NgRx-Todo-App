import {authReducer} from './auth/auth.reducer';
import {taskReducer} from './task-store/task.reducer';
import {AppState} from './app.state';
import {ActionReducerMap} from '@ngrx/store';
import {weatherReducer} from './weather-store/weather.reducer';

/**
 * Root reducer map binding all feature reducers.
 */
export const appReducer: ActionReducerMap<AppState> = {
  tasks: taskReducer,
  auth: authReducer,
  weather: weatherReducer,
};
