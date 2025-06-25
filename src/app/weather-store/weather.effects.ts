import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as loadActions from './weather.actions';
import { catchError, delay, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import {environment} from "../../environments/environment";


@Injectable()
export class Weathereffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);


  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadActions.loadWeather),
      switchMap(({city}) =>
        this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.openWeatherMapApiKey}&units=metric`)
          .pipe(
            delay(1000)
          )
          .pipe(
            map(res =>
              loadActions.loadWeatherSuccess({
                weather : {
                  city : res.name,
                  temperature : res.main.temp,
                  humidity : res.main.humidity,
                  description : res.weather[0].description,
                  windSpeed: res.wind.speed,
                  pressure: res.main.pressure
                }
              }),
            ),
            catchError(err => of(loadActions.loadWeatherFailure({error : err.message || 'Failed to load the message'})))
          )
      )
    )
  )
}
