import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import { catchError, map, of, switchMap } from "rxjs";
import {loadTasks, loadTasksFailure, loadTasksSuccess} from './task.actions';
import { Task } from '../models/task.model';


/**
 * Interface representing a single task item returned by the external JSON API.
 *
 * This is the raw shape of the data from:
 * https://jsonplaceholder.typicode.com/todos
 */
interface JSONDATA {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Injectable()
export class TasksEffects {

  /** Injects the Actions stream provided by NgRx */
  private actions$ = inject(Actions);

  /** Injects Angular's HttpClient to make API calls */
  private http = inject(HttpClient);

  /**
   * Effect that listens for `loadTasks` actions and performs an HTTP request
   * to fetch a limited list of tasks from a public JSON API.
   *
   * On success: Dispatches `loadTasksSuccess` with the transformed task data.
   * On failure: Dispatches `loadTasksFailure` with the error object.
   */
  loadTask$ = createEffect(() => this.actions$.pipe(
    // loadTasks
    ofType(loadTasks),
    switchMap(() => {
      //JSON
      return this.http.get<JSONDATA[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .pipe(
          map(backendData => {
            // Transform JSON API format into our internal Task model
            const tasks : Task[] = backendData.map(todo => ({
              id : todo.id.toString(), // Convert numeric ID to string
              description : todo.title,
              completed : todo.completed
            }));

            return loadTasksSuccess({tasks : tasks})

          }),
          //http fails
          catchError(error => {
            return  of(loadTasksFailure({error : error}));
          })
          // http successs
          // failure
        );
    })
  ));

}
