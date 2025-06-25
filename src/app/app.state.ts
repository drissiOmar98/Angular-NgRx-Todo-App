import {AuthState} from './auth/auth.model';
import {taskState} from './task-store/task.state';
import {WeatherState} from './weather-store/weather.reducer';

/**
 * Root AppState interface describing all feature slices.
 */
export interface AppState {
  tasks: taskState;
  auth: AuthState;
  weather: WeatherState;
}
