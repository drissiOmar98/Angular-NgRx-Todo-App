import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {appReducer} from './app.reducer';
import {provideEffects} from '@ngrx/effects';
import {provideHttpClient} from '@angular/common/http';
import {TasksEffects} from './task-store/task.effects';
import {Weathereffects} from './weather-store/weather.effects';
import {provideAnimations} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),


    // ✅ NgRx setup
    /* provideStore({ tasks: taskReducer }),*/
    provideStore(appReducer), // ✅ cleaner and central
    provideEffects(TasksEffects,Weathereffects),
  ]
};
